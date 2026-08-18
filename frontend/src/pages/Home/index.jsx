import HeroSection from "../../components/HeroSection";
import HomeFooter from "../../components/HomeFooter";
import HomeHeader from "../../components/HomeHeader";

const Home = () => {
  return (
    <div className="bg-[#070911]">
      <div>
        <HomeHeader />
        <HeroSection />
        <HomeFooter/>
      </div>
    </div>
  );
};

export default Home;
