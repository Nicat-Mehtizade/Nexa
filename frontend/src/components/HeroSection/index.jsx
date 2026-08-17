import { WiStars } from "react-icons/wi";

const HeroSection = () => {
  return (
    <div className="py-15">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center gap-5">
          <div>
            <div className="w-1/3 mb-7">
              <p className="text-pink-100 flex items-center justify-center border border-[#C796F3] shadow-[0px_1px_6px_1px] shadow-[#C796F3] rounded-full p-1">
                <WiStars className="text-2xl" />
                Built for modern teams
              </p>
            </div>
            <div className="mb-7">
              <h1 className="text-7xl text-white font-bold mb-2">
                Plan. Build. Ship.
              </h1>
              <h1 className="text-7xl text-[#876AE9] font-bold mb-6">
                All in one place.
              </h1>
              <p className="text-gray-400 font-medium w-[60%]">
                Nexa is the all-in-one platform for project management, issue
                tracking, and team collaboration.
              </p>
            </div>
            <div>
              <button className="text-white bg-[#5434BF] py-2 px-5 rounded-[10px] cursor-pointer font-medium">
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
