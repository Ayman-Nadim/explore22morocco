import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import agents from './agents.json';
import PlaceDetails from "../../Results/PlaceDetails";

const PromptAgent = () => {
  const transition = { duration: 0.5, ease: "easeInOut" };
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [userPrompt, setUserPrompt] = useState("");
  const [recommendations, setRecommendations] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleNext = () => {
    setCurrentAgentIndex((prevIndex) => (prevIndex + 1) % agents.length);
  };

  const handlePrevious = () => {
    setCurrentAgentIndex((prevIndex) =>
      prevIndex === 0 ? agents.length - 1 : prevIndex - 1
    );
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const currentAgent = agents[currentAgentIndex];

  const handleAskClick = async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8001/get-recommendations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      if (!response.ok) {
        throw new Error("Erreur réseau : impossible de récupérer les recommandations.");
      }

      const data = await response.json();
      setRecommendations(data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Erreur lors de la récupération des recommandations :", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRestaurants = recommendations?.results?.slice(startIndex, endIndex) || [];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.img
            key={currentAgent.image}
            src={require(`${currentAgent.image}`)}
            alt="AI Agent Guide"
            style={{
              width: "280px",
              height: "300px",
              display: "block",
              margin: "0 auto",
              borderRadius: "50%",
            }}
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
              Switch between agents
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

          <div className="mx-auto mt-8 pt-10 p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105">
            <div className="flex flex-col space-y-4">
              <div className="flex w-full max-w-3xl mx-auto items-center space-x-2">
                <input
                  type="text"
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  placeholder="What are you looking for in Morocco?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
                <button
                  onClick={handleAskClick}
                  disabled={isLoading}
                  className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-105 flex items-center justify-center min-w-[100px]"
                >
                  {isLoading ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    />
                  ) : (
                    "Ask"
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Create an account to save your favorite recommendations and get personalized itineraries.
              </p>
            </div>

            {error && (
              <div className="mt-6 text-red-500">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Résultats des recommandations */}
      <div className="mt-12 container mx-auto px-4">
        {isLoading ? (
          <>
            <div className="flex justify-center align-middle">
              <motion.div
                className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </div>
            <p className="text-orange-600 text-lg font-semibold text-center pt-2">
              I'm looking for you the best places in Morocco...
            </p>
          </>
        ) : recommendations?.results?.length === 0 ? (
          <p className="text-gray-500 text-center">No recommendations found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentRestaurants.map((restaurant, index) => (
              <PlaceDetails key={index} data={{ results: [restaurant] }} />
            ))}
          </div>
        )}

        {recommendations?.results?.length > 0 && (
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => handlePagination(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <span className="text-gray-700 font-medium text-sm">
              Page {currentPage}
            </span>
            <button
              onClick={() => handlePagination(currentPage + 1)}
              disabled={endIndex >= recommendations?.results?.length}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PromptAgent;
