// // import React, { useState } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// // import { motion } from "framer-motion";
// // import agents from './agents.json'
// // const PromptAgent = () => {
// //   const transition = { duration: 0.5, ease: "easeInOut" };
// //   const [currentAgentIndex, setCurrentAgentIndex] = useState(0);

// //   const handleNext = () => {
// //     setCurrentAgentIndex((prevIndex) => (prevIndex + 1) % agents.length);
// //   };

// //   const handlePrevious = () => {
// //     setCurrentAgentIndex((prevIndex) =>
// //     prevIndex === 0 ? agents.length - 1 : prevIndex - 1
// //     );
// //   };
// //   const currentAgent = agents[currentAgentIndex];

// //   return (
// //     <>
// //     <section className="py-16 bg-gray-100">
// //     <div className="container mx-auto px-4">
// //         <div className="mx-auto max-w-4xl text-center">

// //         {/* Affichage dynamique de l'agent */}
// //         <motion.img
// //             key={currentAgent.image} // Clé pour déclencher l'animation au changement
// //             src={require(`${currentAgent.image}`)}
// //             alt="AI Agent Guide"
// //             style={{
// //             width: '280px',
// //             height: '300px',
// //             display: 'block',
// //             margin: '0 auto',
// //             borderRadius: '50%',
// //             }}
// //             className="transition-transform transform hover:scale-110 border-4 border-orange-500 shadow-xl"
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0, scale: 0.8 }}
// //             transition={transition}
// //         />

// //         {/* Navigation entre les agents */}
// //         <div className="flex items-center justify-center gap-4 mx-auto mt-4">
// //             <button
// //             onClick={handlePrevious}
// //             className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
// //             >
// //             <ChevronLeft className="w-6 h-6 text-gray-700" />
// //             </button>

// //             <span className="text-gray-700 font-medium text-sm">
// //             Naviguez entre les agents
// //             </span>

// //             <button
// //             onClick={handleNext}
// //             className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
// //             >
// //             <ChevronRight className="w-6 h-6 text-gray-700" />
// //             </button>
// //         </div>

// //         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-6 text-gray-800 transition duration-300 transform hover:text-orange-600">
// //             Your AI Travel Companion
// //         </h2>

// //         <p className="mt-4 text-lg text-gray-700 font-semibold">
// //             {currentAgent.text}
// //         </p>

// //         {/* Section de la barre de recherche */}
// //         <div className="mx-auto mt-8 pt-10 p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105">
// //             <div className="flex flex-col space-y-4">
// //             <div className="flex w-full max-w-3xl mx-auto items-center space-x-2">
// //                 <input
// //                 type="text"
// //                 placeholder="What are you looking for in Morocco? E.g., 'Best riads in Marrakech' or 'Coastal restaurants in Essaouira'"
// //                 className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
// //                 />
// //                 <button className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-105">
// //                 Ask
// //                 </button>
// //             </div>
// //             <p className="text-sm text-gray-500">
// //                 Create an account to save your favorite recommendations and get personalized itineraries.
// //             </p>
// //             </div>
// //         </div>

// //         </div>
// //     </div>
// //     </section>
// //     </>
// //   );
// // };

// // export default PromptAgent;

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";
// import agents from './agents.json';
// import RestaurantDetails from "../../Results/RestaurantDetails";

// const PromptAgent = () => {
//   const transition = { duration: 0.5, ease: "easeInOut" };
//   const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
//   const [userPrompt, setUserPrompt] = useState("");
//   const [recommendations, setRecommendations] = useState(null);
//   const [error, setError] = useState("");

//   const handleNext = () => {
//     setCurrentAgentIndex((prevIndex) => (prevIndex + 1) % agents.length);
//   };

//   const handlePrevious = () => {
//     setCurrentAgentIndex((prevIndex) =>
//       prevIndex === 0 ? agents.length - 1 : prevIndex - 1
//     );
//   };

//   const currentAgent = agents[currentAgentIndex];

//   const handleAskClick = async () => {
//     setError("");
//     try {
//       const response = await fetch("http://127.0.0.1:8001/get-recommendations/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ prompt: userPrompt }),
//       });

//       if (!response.ok) {
//         throw new Error("Erreur réseau : impossible de récupérer les recommandations.");
//       }

//       const data = await response.json();
//       console.log("Réponse de l'API :", data);
//       setRecommendations(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des recommandations :", error);
//       setError(error.message);
//     }
//   };

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="mx-auto max-w-4xl text-center">
//           <motion.img
//             key={currentAgent.image}
//             src={require(`${currentAgent.image}`)}
//             alt="AI Agent Guide"
//             style={{
//               width: "280px",
//               height: "300px",
//               display: "block",
//               margin: "0 auto",
//               borderRadius: "50%",
//             }}
//             className="transition-transform transform hover:scale-110 border-4 border-orange-500 shadow-xl"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={transition}
//           />

//           <div className="flex items-center justify-center gap-4 mx-auto mt-4">
//             <button
//               onClick={handlePrevious}
//               className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-700" />
//             </button>
//             <span className="text-gray-700 font-medium text-sm">
//               Naviguez entre les agents
//             </span>
//             <button
//               onClick={handleNext}
//               className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-700" />
//             </button>
//           </div>

//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-6 text-gray-800 transition duration-300 transform hover:text-orange-600">
//             Your AI Travel Companion
//           </h2>

//           <p className="mt-4 text-lg text-gray-700 font-semibold">
//             {currentAgent.text}
//           </p>

//           <div className="mx-auto mt-8 pt-10 p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105">
//             <div className="flex flex-col space-y-4">
//               <div className="flex w-full max-w-3xl mx-auto items-center space-x-2">
//                 <input
//                   type="text"
//                   value={userPrompt}
//                   onChange={(e) => setUserPrompt(e.target.value)}
//                   placeholder="What are you looking for in Morocco?"
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
//                 />
//                 <button
//                   onClick={handleAskClick}
//                   className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-105"
//                 >
//                   Ask
//                 </button>
//               </div>
//               <p className="text-sm text-gray-500">
//                 Create an account to save your favorite recommendations and get personalized itineraries.
//               </p>
//             </div>

//             {/* Résultats */}
//             {recommendations &&
//               recommendations.results &&
//               recommendations.results.length > 0 && (
//                 <div className="mt-6 text-left">
//                   <h3 className="text-xl font-bold text-orange-600 mb-4">
//                     Recommandation sélectionnée :
//                   </h3>

//                   <RestaurantDetails data={recommendations} />

//                   {/* Résumé du lieu et de l'activité */}
//                   <div className="mt-6 text-sm text-gray-600 space-y-1">
//                     {recommendations.location && (
//                       <p>
//                         <strong>📍 Lieu :</strong> {recommendations.location}
//                       </p>
//                     )}
//                     {recommendations.activity && (
//                       <p>
//                         <strong>🎯 Activité :</strong> {recommendations.activity}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               )}

//             {/* Erreurs */}
//             {error && (
//               <div className="mt-6 text-red-500">
//                 <p>{error}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromptAgent;

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";
// import agents from './agents.json';
// import RestaurantDetails from "../../Results/RestaurantDetails";

// const PromptAgent = () => {
//   const transition = { duration: 0.5, ease: "easeInOut" };
//   const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
//   const [userPrompt, setUserPrompt] = useState("");
//   const [recommendations, setRecommendations] = useState(null);
//   const [error, setError] = useState("");

//   const handleNext = () => {
//     setCurrentAgentIndex((prevIndex) => (prevIndex + 1) % agents.length);
//   };

//   const handlePrevious = () => {
//     setCurrentAgentIndex((prevIndex) =>
//       prevIndex === 0 ? agents.length - 1 : prevIndex - 1
//     );
//   };

//   const currentAgent = agents[currentAgentIndex];

//   const handleAskClick = async () => {
//     setError("");
//     try {
//       const response = await fetch("http://127.0.0.1:8001/get-recommendations/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ prompt: userPrompt }),
//       });

//       if (!response.ok) {
//         throw new Error("Erreur réseau : impossible de récupérer les recommandations.");
//       }

//       const data = await response.json();
//       console.log("Réponse de l'API :", data);
//       setRecommendations(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des recommandations :", error);
//       setError(error.message);
//     }
//   };

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="mx-auto max-w-4xl text-center">
//           <motion.img
//             key={currentAgent.image}
//             src={require(`${currentAgent.image}`)}
//             alt="AI Agent Guide"
//             style={{
//               width: "280px",
//               height: "300px",
//               display: "block",
//               margin: "0 auto",
//               borderRadius: "50%",
//             }}
//             className="transition-transform transform hover:scale-110 border-4 border-orange-500 shadow-xl"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={transition}
//           />

//           <div className="flex items-center justify-center gap-4 mx-auto mt-4">
//             <button
//               onClick={handlePrevious}
//               className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-700" />
//             </button>
//             <span className="text-gray-700 font-medium text-sm">
//               Naviguez entre les agents
//             </span>
//             <button
//               onClick={handleNext}
//               className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-700" />
//             </button>
//           </div>

//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-6 text-gray-800 transition duration-300 transform hover:text-orange-600">
//             Your AI Travel Companion
//           </h2>

//           <p className="mt-4 text-lg text-gray-700 font-semibold">
//             {currentAgent.text}
//           </p>

//           <div className="mx-auto mt-8 pt-10 p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105">
//             <div className="flex flex-col space-y-4">
//               <div className="flex w-full max-w-3xl mx-auto items-center space-x-2">
//                 <input
//                   type="text"
//                   value={userPrompt}
//                   onChange={(e) => setUserPrompt(e.target.value)}
//                   placeholder="What are you looking for in Morocco?"
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
//                 />
//                 <button
//                   onClick={handleAskClick}
//                   className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-105"
//                 >
//                   Ask
//                 </button>
//               </div>
//               <p className="text-sm text-gray-500">
//                 Create an account to save your favorite recommendations and get personalized itineraries.
//               </p>
//             </div>

//             {/* Erreurs */}
//             {error && (
//               <div className="mt-6 text-red-500">
//                 <p>{error}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Section hors de la zone principale pour les recommandations */}
//       <div className="mt-12 container mx-auto px-4">
//         <h3 className="text-2xl font-bold text-gray-800 mb-4">Restaurant Recommendations</h3>
//         {recommendations && recommendations.results && recommendations.results.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {recommendations.results.map((restaurant, index) => (
//               <RestaurantDetails key={index} data={{ results: [restaurant] }} />
//             ))}
//           </div>
//         )}
//       </div>

//     </section>
//   );
// };

// export default PromptAgent;


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

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Nombre d'éléments par page

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
      console.log("Réponse de l'API :", data);
      setRecommendations(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des recommandations :", error);
      setError(error.message);
    }
  };

  // Calculer les éléments de la page actuelle
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
                  className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-105"
                >
                  Ask
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Create an account to save your favorite recommendations and get personalized itineraries.
              </p>
            </div>

            {/* Erreurs */}
            {error && (
              <div className="mt-6 text-red-500">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section hors de la zone principale pour les recommandations */}
      <div className="mt-12 container mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Restaurant Recommendations</h3>
        
        {/* Afficher un message de chargement */}
        {recommendations === null ? (
          <p className="text-gray-500">Loading recommendations...</p>
        ) : recommendations?.results?.length === 0 ? (
          <p className="text-gray-500">No recommendations found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentRestaurants.map((restaurant, index) => (
              <PlaceDetails key={index} data={{ results: [restaurant] }} />
            ))}
          </div>
        )}

        {/* Pagination */}
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
