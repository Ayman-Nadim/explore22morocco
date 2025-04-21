import { Route, Routes } from 'react-router-dom';
import './App.css';
import '@mantine/core/styles.css';
import LandingPage from "./components/LandingPage/LandingPage/LandinPage";
import SignIn from './components/AuthPages/SignIn';
import SignUp from './components/AuthPages/SignUp';
import PromptAgent from './components/LandingPage/Components/PromptAgent/PromptAgent';
import Sidebar from './components/AppComponents/Sidebar';
import Header from './components/LandingPage/Components/Header/Header';
import PopularDestinations from './components/LandingPage/Components/PopularDestinations/PopularDestinations';
import TopRestaurantsHotels from './components/LandingPage/Components/TopRestaurantsHotels/TopRestaurantsHotels';
import UnforgettableExperiences from './components/LandingPage/Components/Experiences/UnforgettableExperiences';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar fixed to the left */}
      <Sidebar />
      

      {/* Main content to the right */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/PromptAgent" element={<PromptAgent />} />
          
          <Route path="/Header" element={<Header />} />
          <Route path="/PopularDestinations" element={<PopularDestinations />} />
          <Route path="/TopRestaurantsHotels" element={<TopRestaurantsHotels />} />
          <Route path="/experiences" element={<UnforgettableExperiences />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
