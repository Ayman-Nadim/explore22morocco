import './LandingPage.css';
import Header from '../Components/Header/Header';
import PromptAgent from '../Components/PromptAgent/PromptAgent';
import PopularDestinations from "../Components/PopularDestinations/PopularDestinations";
import UnforgettableExperiences from '../Components/Experiences/UnforgettableExperiences';
import TopRestaurantsHotels from "../Components/TopRestaurantsHotels/TopRestaurantsHotels";
import Footer from "../Components/footer";


function LandingPage(){
    return(
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header/>
            
            {/* PromptAgent */}
            <PromptAgent/>

            {/* PopularDestinations */}
            <PopularDestinations/>

            {/* Unforgettable Experiences */}
            <UnforgettableExperiences/>

            {/* TopRestaurantsHotels */}
            
            <TopRestaurantsHotels/>
            {/*Footer */}
            <Footer/>
        </div>
    )
}

export default LandingPage;