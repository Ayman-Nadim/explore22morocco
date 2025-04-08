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
} from "lucide-react";

const menuItems = [
    { label: "Guide AI Agent", icon: <User size={20} />, to: "/PromptAgent" },
    { label: "Plan Trip", icon: <Calendar size={20} />, to: "/plan-trip" },
    { label: "Favorites", icon: <Star size={20} />, to: "/favorites" },
    { label: "Destinations", icon: <MapPin size={20} />, to: "/PopularDestinations" },
    { label: "Experiences", icon: <Home size={20} />, to: "/experiences" },
    { label: "Hotels & Restaurants", icon: <Utensils size={20} />, to: "/TopRestaurantsHotels" },  // Combined Hotels & Restaurants
  ];  
    

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen bg-white text-gray-800 shadow-lg flex flex-col justify-between transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {isOpen && (
          <img
            src={require('../../img/Explore2MoroccoLogo.png')}
            alt="Logo"
            className="w-36 h-auto"
          />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-orange-500"
        >
          <Menu />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 flex-1 space-y-1">
        {menuItems.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            className="flex items-center gap-4 px-4 py-3 rounded-md mx-2 hover:bg-orange-100 hover:text-orange-600 transition"
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

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-4 text-orange-500 hover:text-red-600 transition">
            <LogOut size={20} />
            {isOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
