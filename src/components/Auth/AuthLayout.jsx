import React, { useState } from "react";

const AuthLayout = ({ children }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true); // La vidéo est maintenant chargée
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Vidéo YouTube en arrière-plan */}
      <div className="absolute inset-0 z-0">
        {!isVideoLoaded && (
          // Image de fond d'attente avant le chargement de la vidéo
          <div className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://via.placeholder.com/1920x1080")', // Remplacer par l'URL de ton image de fond
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/TPHwUGTxgiw?autoplay=1&mute=1&loop=1&playlist=TPHwUGTxgiw&controls=0&showinfo=0&modestbranding=1&start=5"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            pointerEvents: "none", // pour ne pas interférer avec les clics
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            transform: 'scale(1.2)', // Ajuster l’échelle pour zoomer
            transformOrigin: 'center', // Zoom centré
          }}
          onLoad={handleVideoLoad} // Déclenchement lorsque la vidéo est chargée
        ></iframe>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Contenu centré (SignIn ou SignUp) */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
