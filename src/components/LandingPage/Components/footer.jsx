import { Link } from 'react-router-dom';

function Footer(){
    return(
        <>
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
                {/* Bouton Login transformé en lien */}
                <Link
                    to="/SignIn"
                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md font-medium text-center"
                >
                    Sign In
                </Link>

                {/* Bouton Sign Up Free transformé en lien */}
                <Link
                    to="/SignUp"
                    className="px-6 py-3 bg-white text-orange-600 rounded-md font-medium hover:bg-gray-100 text-center"
                >
                    Sign Up Free
                </Link>
                </div>
                </div>
            </div>
            </section>
            <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <img
                src={require("../../../img/Explore2MoroccoLogo.png")} 
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
        </>
    )
}

export default Footer;