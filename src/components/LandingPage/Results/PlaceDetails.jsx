import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Si tu utilises react-icons

const PlaceDetails = ({ data }) => {
  const restaurant = data.results[0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPageReviews, setCurrentPageReviews] = useState(1);
  const itemsPerPage = 3; // Nombre d'avis par page

  // Fonction pour ouvrir et fermer le modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Fonction pour gérer la pagination des avis
  const handlePaginationReviews = (pageNumber) => {
    setCurrentPageReviews(pageNumber);
  };

  // Calculer les avis à afficher pour la page actuelle
  const startIndexReviews = (currentPageReviews - 1) * itemsPerPage;
  const endIndexReviews = startIndexReviews + itemsPerPage;

  return (
    <div>
      {/* Card with important information */}
      <div
        onClick={toggleModal}  // Ouvre le modal au clic sur la carte
        className="max-w-lg mx-auto p-4 space-y-4 bg-white rounded-2xl shadow-lg cursor-pointer h-[400px] flex flex-col justify-between"
      >
        <img
          src={restaurant.photos[0]}
          alt={restaurant.name}
          className="rounded-xl object-cover h-40 w-full"
          onError={(e) => e.target.src = 'https://dessertdivine.com.au/wp-content/uploads/2022/02/Image-Not-Available.png'} // Image de remplacement en cas d'erreur
        />
        <h3 className="text-xl font-semibold text-orange-400 font-serif">{restaurant.name}</h3>

        <p className="text-gray-600">{restaurant.address}</p>
        <p className="text-yellow-500 font-medium">⭐ {restaurant.rating} / 5</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={toggleModal}  // Ferme le modal si on clique en dehors
        >
          <div
            className="bg-white rounded-2xl p-6 space-y-6 max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}  // Empêche la fermeture du modal si on clique à l'intérieur
          >
            {/* Modal Content */}
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-orange-400">{restaurant.name}</h1>
              <button
                onClick={toggleModal}
                className="text-2xl text-red-600 hover:text-red-800 transition-all"
              >
                ❌
              </button>
            </div>
            <p className="text-gray-600">{restaurant.address}</p>
            <p className="text-yellow-500 font-medium">⭐ {restaurant.rating} / 5</p>
            <p className="text-sm text-gray-500">{restaurant.types.join(", ")}</p>

            {/* Buttons for Redirection */}
            <div className="mt-4 space-x-4">
              <i className="fas fa-globe ml-2 text-green-600"></i>
              <a
                href={restaurant.website}
                className="text-green-600 hover:text-green-700 inline-flex items-center text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visiter le site
              </a>

              <i className="fas fa-map-marker-alt ml-2 text-blue-600"></i>
              <a
                href={restaurant.map_url}
                className="text-blue-600 hover:text-blue-700 inline-flex items-center text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur Google Maps
              </a>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {restaurant.photos.slice(0, 6).map((photoUrl, index) => (
                <img
                  key={index}
                  src={photoUrl}
                  alt={`Photo ${index + 1}`}
                  className="rounded-xl object-cover h-40 w-full"
                  onError={(e) => e.target.src = 'https://dessertdivine.com.au/wp-content/uploads/2022/02/Image-Not-Available.png'} // Image de remplacement en cas d'erreur
                />
              ))}
            </div>

            {/* Opening Hours */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-orange-400 text-center mb-4">Horaires d'Ouverture</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {restaurant.opening_hours.weekday_text.map((hour, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg shadow-md w-32 text-center hover:bg-gray-200 transition-all duration-300"
                  >
                    <p className="text-md font-medium text-orange-700 font-sans">{hour}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps Section with Address */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-orange-400 text-center mb-4">Localisation</h3>
              <div className="w-full h-48 sm:h-60">
                {/* Si la location est disponible, afficher la carte */}
                {restaurant.location ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.google.com/maps/embed/v1/place?q=${restaurant.location.lat},${restaurant.location.lng}&key=AIzaSyD7gKJclevoJuIpexqsqAY9RDtJSemdoaE`}
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                ) : (
                  <div className="text-center">
                    <p className="text-gray-600">Localisation non disponible</p>
                    <a
                      href={`https://www.google.com/maps/search/?q=${encodeURIComponent(restaurant.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Voir sur Google Maps
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Reviews with Pagination */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Avis Clients</h2>
              <div className="space-y-4">
                {restaurant.reviews.slice(startIndexReviews, endIndexReviews).map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-xl shadow-sm space-y-1"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-10 h-10 rounded-full"
                        onError={(e) => e.target.src = 'https://previews.123rf.com/images/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'} // Image de remplacement pour les profils des avis
                      />
                      <div>
                        <p className="font-medium">{review.author_name}</p>
                        <p className="text-sm text-gray-500">
                          ⭐ {review.rating} – {review.relative_time_description}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                    <a
                      href={review.author_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-sm underline"
                    >
                      Voir sur Google Maps
                    </a>
                  </div>
                ))}
              </div>

              {/* Pagination with Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() => handlePaginationReviews(currentPageReviews - 1)}
                  disabled={currentPageReviews === 1}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-all"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={() => handlePaginationReviews(currentPageReviews + 1)}
                  disabled={endIndexReviews >= restaurant.reviews.length}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-all"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Close Modal Button for the bottom (optional) */}
            <button
              onClick={toggleModal}
              className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 sm:hidden"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceDetails;
