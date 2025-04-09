import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Home,
  MapPin,
  Utensils,
  LogOut,
  Star,
  User,
  Calendar,
  X,
} from "lucide-react";

const menuItems = [
  { label: "Guide AI Agent", icon: <User size={20} />, to: "/PromptAgent" },
  { label: "Plan Trip", icon: <Calendar size={20} />, to: "/plan-trip" },
  { label: "Favorites", icon: <Star size={20} />, to: "/favorites" },
  { label: "Destinations", icon: <MapPin size={20} />, to: "/PopularDestinations" },
  { label: "Experiences", icon: <Home size={20} />, to: "/experiences" },
  { label: "Hotels & Restaurants", icon: <Utensils size={20} />, to: "/TopRestaurantsHotels" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-gray-700 bg-white rounded-md p-2 shadow"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:flex
        ${isOpen ? "w-60" : "w-20"}`}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            {isOpen && (
              <img
                src={require("../../img/Explore2MoroccoLogo.png")}
                alt="Logo"
                className="w-36 h-auto"
              />
            )}
            <button
              onClick={() => isMobileOpen ? setIsMobileOpen(false) : setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-orange-500"
            >
              {isMobileOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 flex-1 space-y-1 overflow-y-auto">
            {menuItems.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                className="flex items-center gap-4 px-4 py-3 rounded-md mx-2 hover:bg-orange-100 hover:text-orange-600 transition"
                onClick={() => setIsMobileOpen(false)} // close on click
              >
                {item.icon}
                {isOpen && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            ))}
          </nav>

          {/* Bottom Section */}
          <div>
            {/* User Info */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-orange-300 text-white flex items-center justify-center">
                    <User size={18} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                </div>
                {isOpen && (
                  <div>
                    <p className="text-sm font-medium">User</p>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                )}
              </div>
            </div>

            {/* Logout */}
            <div className="p-4 border-t border-gray-200">
              <button className="flex items-center gap-4 text-orange-500 hover:text-red-600 transition">
                <LogOut size={20} />
                {isOpen && <span className="text-sm">Logout</span>}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
