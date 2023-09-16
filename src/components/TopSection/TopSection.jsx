import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const TopSection = () => {
  return (
    <div className="top-section">
      <img src="Images/backgroung.jpg" alt="Background" className="bg" />
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default TopSection;
