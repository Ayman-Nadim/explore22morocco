import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
        <section className="relative h-[800px] w-full">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-transparent shadow-sm py-8">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                <img 
                    src={require("../../../../img/Explore2MoroccoLogo.png")} 
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
                <Link to="/SignIn" className="hidden sm:flex px-4 py-2 border rounded-md text-sm font-medium text-white">
                Sign In
                </Link>
                <Link to="/SignUp" className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700">
                Sign Up
                </Link>
                </div>
            </div>
            </header>

            <img
              src={require("../PopularDestinations/img/casa.jpg")}
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
                </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default Header;