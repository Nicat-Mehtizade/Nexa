import { WiStars } from "react-icons/wi";
import Threads from "../Threads/Threads";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="relative  overflow-hidden py-15">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Threads
          color={[0.53, 0.42, 0.91]}
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="items-center justify-between gap-5 px-5 md:flex xl:px-0">
          <div>
            <div className="mb-7 w-[95%] min-[370px]:w-1/2 sm:w-1/3">
              <p className="flex items-center justify-center gap-1 text-nowrap rounded-full border border-[#C796F3] p-1 text-center text-sm text-pink-100 shadow-[0px_1px_6px_1px] shadow-[#C796F3] md:text-[16px]">
                <WiStars className="shrink-0 text-2xl" />
                Built for modern teams
              </p>
            </div>

            <div className="mb-7">
              <h1 className="mb-2 text-5xl font-bold text-white lg:text-7xl">
                Plan. Build. Ship.
              </h1>

              <h1 className="mb-6 text-5xl font-bold text-[#876AE9] lg:text-7xl">
                All in one place.
              </h1>

              <p className="font-medium text-gray-400 md:w-[60%]">
                Nexa is the all-in-one platform for project management, issue
                tracking, and team collaboration.
              </p>
            </div>

            <NavLink to={"/login"} className="cursor-pointer rounded-[10px] bg-[#5434BF] px-5 py-2 font-medium text-white transition duration-300 hover:bg-[#3b18af]">
              Get Started for free
            </NavLink>
          </div>

          <div>
            <img src={null} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
