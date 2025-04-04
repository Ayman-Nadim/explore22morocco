// import React, { useState } from 'react';

// // const agents = [
// //   {
// //     name: 'Mehdi',
// //     image: './img/AgentGuide.png',
// //     text: 'Hello, my name is Mehdi, your AI Agent Guide. Tell me where you\'d like to explore today in Morocco!'
// //   },
// //   {
// //     name: 'Sara',
// //     image: './img/AgentGuide2.png',
// //     text: 'Hi, I\'m Sara! I can help you navigate the best places in Morocco. Where are we going today?'
// //   },
// //   {
// //     name: 'Youssef',
// //     image: './img/AgentGuide.png',
// //     text: 'Hello, I\'m Youssef. Let\'s explore Morocco together. What’s your next adventure?'
// //   }
// // ];

// function AgentSelector() {
//   const [currentAgentIndex, setCurrentAgentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentAgentIndex((prevIndex) => (prevIndex + 1) % agents.length);
//   };

//   const handlePrevious = () => {
//     setCurrentAgentIndex((prevIndex) =>
//       prevIndex === 0 ? agents.length - 1 : prevIndex - 1
//     );
//   };

//   const currentAgent = agents[currentAgentIndex];

//   return (
//     <div className="agent-selector w-full flex justify-center items-center flex-col ">
//       {/* <div className="image-container mb-4">
//         <img src={require(`${currentAgent.image}`)} 
//           alt={currentAgent.name} 
//           style={{ width: '280px', height: '300px', display: 'block', margin: '0 auto', borderRadius: '50%' }} 
//           // className="rounded-md hover:drop-shadow-[0_0_10px_#FFFFFF] transition-all duration-300" 
//           className="transition-transform transform hover:scale-110 border-4 border-orange-500 shadow-xl "
          
//         />
//       </div>
//       <p className="mt-4 text-lg text-gray-700 font-semibold">{currentAgent.text}</p>

//       <div className="arrow-buttons mt-4 flex justify-between w-32">
//         <button
//           onClick={handlePrevious}
//           className="text-gray-700 font-bold text-xl"
//         >
//           &#8592;
//         </button>
//         <button
//           onClick={handleNext}
//           className="text-gray-700 font-bold text-xl"
//         >
//           &#8594;
//         </button>
//       </div>
// {/* Section de la barre de recherche */}
// <div className="w-1/5 mx-auto mt-8 pt-10 p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105">
  // <div className="flex flex-col space-y-4">
  //   <div className="flex w-full max-w-3xl mx-auto items-center space-x-2">
  //     <input
  //       type="text"
  //       placeholder="What are you looking for in Morocco? E.g., 'Best riads in Marrakech' or 'Coastal restaurants in Essaouira'"
  //       className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
  //     />
  //     <button className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-105">
  //       Ask
  //     </button>
  //   </div>
  //   <p className="text-sm text-gray-500">
  //     Create an account to save your favorite recommendations and get personalized itineraries.
  //   </p>
  // </div>
// </div> */}

//     </div>
//   );
// }

// export default AgentSelector;
