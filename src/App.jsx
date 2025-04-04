import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css"

function App() {
  const transition = { duration: 0.5, ease: "easeInOut" };
  const destinations = [
    { city: "Marrakech", imgSrc: "./img/PopularDestinations/Kech.jpg" },
    { city: "Fes", imgSrc: "./img/PopularDestinations/fes.jpg" },
    { city: "Chefchaouen", imgSrc: "./img/PopularDestinations/chefchaouen.jpg" },
    { city: "Essaouira", imgSrc: "./img/PopularDestinations/essauria.jpg" },
    { city: "Casablanca", imgSrc: "./img/PopularDestinations/casa.jpg" },
    { city: "Merzouga", imgSrc: "./img/PopularDestinations/sahara.jpg" }
  ];

  const experiences = [
    {
      title: "Desert Safari",
      description: "Experience the magic of the Sahara Desert",
      imgSrc: require('./img/UnforgettableExperiences/Desert Safari.jpg'),
    },
    {
      title: "Medina Tours",
      description: "Explore the ancient walled cities of Morocco",
      imgSrc: require('./img/UnforgettableExperiences/Medina Tours.jpg'),
    },
    {
      title: "Cooking Classes",
      description: "Learn to prepare authentic Moroccan cuisine",
      imgSrc: require('./img/UnforgettableExperiences/Cooking Classes.jpg'),
    },
    {
      title: "Atlas Mountains",
      description: "Hike through breathtaking mountain landscapes",
      imgSrc: require('./img/UnforgettableExperiences/Atlas Mountains.jpeg'),
    },
    {
      title: "Quad Biking Adventure",
      description: "Ride through dunes and rocky paths for an adrenaline rush",
      imgSrc: require('./img/UnforgettableExperiences/Quad Biking Adventure.jpg'),
    },
    {
      title: "Hammam & Spa",
      description: "Relax with a traditional Moroccan spa and massage experience",
      imgSrc: require('./img/UnforgettableExperiences/Hammam Spa.jpg'),
    },
  ];
  
  const restaurantsData = [
    {
      name: "La Maison Arabe",
      description: "A blend of Moroccan and French cuisine in a beautiful riad. Experience fine dining with an authentic touch of Moroccan culture and charm.",
      image: "./img/restaurantsImg/La Maison Arabe.jpg"
    },
    {
      name: "Dar Essalam",
      description: "A historic restaurant offering traditional Moroccan dishes with live music and royal ambiance. Perfect for an immersive cultural experience.",
      image: "./img/restaurantsImg/Dar Essalam.jpg"
    },
    {
      name: "Le Jardin",
      description: "A peaceful garden restaurant offering a mix of Moroccan and Mediterranean dishes. Ideal for a relaxing lunch or dinner in the heart of the medina.",
      image: "./img/restaurantsImg/Le Jardin.jpg"
    },
    {
      name: "Nomad",
      description: "Modern Moroccan cuisine served on a trendy rooftop with stunning views. A perfect blend of style, fresh ingredients, and breathtaking vistas.",
      image: "./img/restaurantsImg/Nomad.jpg"
    }
  ];

  const hotelsData = [
    {
      name: "La Mamounia",
      description: "An iconic luxury hotel offering elegant Moroccan design, world-class service, and expansive gardens in the heart of Marrakesh.",
      image: "./img/hotelsImg/La Mamounia.jpg"
    },
    {
      name: "Royal Mansour",
      description: "A truly luxurious retreat with private riads, Michelin-starred dining, and impeccable service. The epitome of exclusivity and Moroccan hospitality.",
      image: "./img/hotelsImg/Royal Mansour.jpg"
    },
    {
      name: "Riad Kniza",
      description: "A historic 18th-century riad offering personalized service, exquisite Moroccan décor, and a serene atmosphere in the heart of Marrakesh.",
      image: "./img/hotelsImg/Riad Kniza.jpg"
    },
    {
      name: "Kasbah Tamadot",
      description: "A luxurious mountain retreat offering panoramic views, traditional Moroccan architecture, and a peaceful escape in the Atlas Mountains.",
      image: "./img/hotelsImg/Kasbah Tamadot.jpg"
    }
  ];
  
  const agents = [
  {
    name: 'Mehdi',
    image: './img/AgentGuide.png',
    text: 'Hello, my name is Mehdi, your AI Agent Guide. Tell me where you\'d like to explore today in Morocco!'
  },
  {
    name: 'Sara',
    image: './img/AgentGuide2.png',
    text: 'Hi, I\'m Sara! I can help you navigate the best places in Morocco. Where are we going today?'
  },
  {
    name: 'Youssef',
    image: './img/AgentGuide3.jpg',
    text: 'Hello, I\'m Youssef. Let\'s explore Morocco together. What’s your next adventure?'
  }
  ];
  
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);

  const handleNext = () => {
    setCurrentAgentIndex((prevIndex) => (prevIndex + 1) % agents.length);
  };

  const handlePrevious = () => {
    setCurrentAgentIndex((prevIndex) =>
    prevIndex === 0 ? agents.length - 1 : prevIndex - 1
    );
  };

  const currentAgent = agents[currentAgentIndex];

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative h-[800px] w-full">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full bg-transparent shadow-sm py-8">
          <div className="container mx-auto px-4 flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src={require("./img/Explore2MoroccoLogo.png")} 
                alt="Explore2Morocco Logo" 
                className="rounded-md hover:drop-shadow-[0_0_10px_#FFFFFF] transition-all duration-300" 
                style={{ width: "240px", height: "130px" }} 
              />
            </div>
            <nav className="hidden md:flex gap-8 text-white P-0">
              <a 
                href="#destinations" 
                className="text-base font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Destinations
              </a>
              <a 
                href="#experiences" 
                className="text-base font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Experiences
              </a>
              <a 
                href="#restaurants" 
                className="text-base font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Restaurants
              </a>
              <a 
                href="#hotels" 
                className="text-base font-medium hover:text-yellow-500 transition-colors duration-300"
              >
                Hotels
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <button className="hidden sm:flex px-4 py-2 border rounded-md text-sm font-medium text-white">Login</button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700">
                Sign Up
              </button>
            </div>
          </div>
        </header>

        <img
          src={require("./img/PopularDestinations/casa.jpg")}
          alt="Morocco Landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-4 relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Discover the Magic of Morocco</h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl">
            Your AI-powered guide to the best places, restaurants, and hotels across Morocco
          </p>

          {/* Scroll Invitation with Enhanced Design */}
          <div className="mt-10 flex flex-col items-center">
            <p className="text-lg sm:text-xl font-semibold text-white mb-4">Scroll down to explore more</p>
            
            <div className="relative">
              {/* Fancy scroll down button with shadow and hover effect */}
              <a href="#destinations">
                <div className="flex items-center justify-center p-2 bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </a>

              {/* Optional Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
      <div className="mx-auto max-w-4xl text-center">
      {/* Affichage dynamique de l'agent */}
      <motion.img
        key={currentAgent.image} // Clé pour déclencher l'animation au changement
        src={require(`${currentAgent.image}`)}
        alt="AI Agent Guide"
        style={{ width: '280px', height: '300px', display: 'block', margin: '0 auto', borderRadius: '50%' }}
        className="transition-transform transform hover:scale-110 border-4 border-orange-500 shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={transition}
      />

      <div className="flex items-center justify-center gap-4 mx-auto mt-4">
      <button
        onClick={handlePrevious}
        className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      
      <span className="text-gray-700 font-medium text-sm">
        Naviguez entre les agents
      </span>
      
      <button
        onClick={handleNext}
        className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-6 text-gray-800 transition duration-300 transform hover:text-orange-600">
        Your AI Travel Companion
      </h2>
      
      <p className="mt-4 text-lg text-gray-700 font-semibold">
        {currentAgent.text}
      </p>




        {/* Section de la barre de recherche */}
        <div className=" mx-auto mt-8 pt-10 p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105">
          <div className="flex flex-col space-y-4">
            <div className="flex w-full max-w-3xl mx-auto items-center space-x-2">
              <input
                type="text"
                placeholder="What are you looking for in Morocco? E.g., 'Best riads in Marrakech' or 'Coastal restaurants in Essaouira'"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
              <button className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-105">
                Ask
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Create an account to save your favorite recommendations and get personalized itineraries.
            </p>
          </div>
        </div>
      </div>
      </div>
      </section>
 

      {/* Destinations Section */}
      <section id="destinations" className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map(({ city, imgSrc }) => (
              <div key={city} className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={require(`${imgSrc}`)}
                    alt={city}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{city}</h3>
                  <p className="text-sm text-gray-500 mt-2">Discover the unique charm and attractions of {city}</p>
                  <a href="#" className="text-orange-600 text-sm mt-2 inline-block">
                    Explore {city}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <AgentSelector/> */}

    {/* Experiences Section */}
    <section id="experiences" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">Unforgettable Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map(({ title, description, imgSrc }, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden h-80">
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-orange-50 py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Restaurants */}
        <div id="restaurants" className="pl-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Top Restaurants</h2>
          <div className="space-y-6">
            {restaurantsData.map((restaurant) => (
              <div key={restaurant.name} className="flex items-center gap-6">
                <div className="relative h-32 w-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={require(`${restaurant.image}`)}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{restaurant.name}</h3>
                  <p className="text-sm text-gray-500">{restaurant.description}</p>
                </div>
              </div>
            ))}
            <button className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold shadow-md transition duration-300">
              Explore More Accommodations
            </button>
          </div>
        </div>

        {/* Hotels */}
        <div id="hotels"  className="pl-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Luxury Hotels & Riads</h2>
          <div className="space-y-6">
            {hotelsData.map((hotel) => (
              <div key={hotel.name} className="flex items-center gap-6">
                <div className="relative h-32 w-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={require(`${hotel.image}`)}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{hotel.name}</h3>
                  <p className="text-sm text-gray-500">{hotel.description}</p>
                </div>
              </div>
            ))}
            <button className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold shadow-md transition duration-300">
              Explore More Accommodations
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Footer */}
<footer className="border-t bg-gray-50 relative">
    {/* Video Background visible only on tablet and larger screens */}
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden md:block hidden">
    <iframe
      className="w-full h-full object-cover"
      src="https://www.youtube.com/embed/TPHwUGTxgiw?autoplay=1&mute=1&loop=1&playlist=TPHwUGTxgiw"
      title="YouTube video"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      style={{
        transform: 'scale(1.2)', // Ajuster l’échelle pour zoomer
        transformOrigin: 'center', // Zoom centré
      }}
    />
  </div>

  {/* Footer Content */}
  <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-xl bg-orange-600 p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Explore Morocco?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Create an account to get personalized recommendations, save your favorite places, and plan your perfect
            Moroccan adventure
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md font-medium">Login</button>
            <button className="px-6 py-3 bg-white text-orange-600 rounded-md font-medium hover:bg-gray-100">
              Sign Up Free
            </button>
          </div>
        </div>
      </div>
    </section>
    <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <img
          src={require("./img/Explore2MoroccoLogo.png")} 
          alt="Explore2Morocco Logo"
          width={32}
          height={32}
          className="rounded-md hover:drop-shadow-[0_0_10px_#FFFFFF] transition-all duration-300" 
          style={{ width: "240px", height: "130px" }} 
        />
      </div>
      <p className="text-sm text-white">© {new Date().getFullYear()} Explore2Morocco. All rights reserved.</p>
    </div>
  </div>
</footer>


    </div>
  )
}

export default App

// import React, { useState } from "react";
// import SignIn from "./components/LandingPage/AuthPages/SignIn";
// import SignUp from "./components/LandingPage/AuthPages/SignUp";

// export default function App(){

//   return(
//     <>
//       <SignIn/>
//       <SignUp/>
//     </>
//   )
// }