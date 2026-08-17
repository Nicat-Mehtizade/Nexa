import HeroSection from "../../components/HeroSection";
import HomeHeader from "../../components/HomeHeader";

const Home = () => {
  return (
    <div className="bg-[#070911]">
      <div>
        <HomeHeader />
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
