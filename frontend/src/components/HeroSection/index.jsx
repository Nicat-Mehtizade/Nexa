import { WiStars } from "react-icons/wi";

const HeroSection = () => {
  return (
    <div className="py-15">
      <div className="mx-auto max-w-7xl">
        <div className="md:flex justify-between items-center gap-5 px-5 xl:px-0">
          <div>
            <div className="mb-7 w-[95%] min-[370px]:w-1/2 sm:w-1/3">
              <p className="flex items-center justify-center gap-1 text-nowrap text-sm md:text-[16px] rounded-full border border-[#C796F3] p-1 text-center text-pink-100 shadow-[0px_1px_6px_1px] shadow-[#C796F3]">
                <WiStars className="shrink-0 text-2xl" />
                Built for modern teams
              </p>
            </div>
            <div className="mb-7">
              <h1 className="text-5xl lg:text-7xl text-white font-bold mb-2">
                Plan. Build. Ship.
              </h1>
              <h1 className="text-5xl lg:text-7xl text-[#876AE9] font-bold mb-6">
                All in one place.
              </h1>
              <p className="text-gray-400 font-medium md:w-[60%]">
                Nexa is the all-in-one platform for project management, issue
                tracking, and team collaboration.
              </p>
            </div>
            <div>
              <button className="text-white bg-[#5434BF] py-2 px-5 rounded-[10px] cursor-pointer font-medium hover:bg-[#3b18af] transition duration-300">
                Get Started for free
              </button>
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
