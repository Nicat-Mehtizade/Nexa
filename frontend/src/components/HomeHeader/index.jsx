import { NavLink } from "react-router-dom";
import nexaLogo from "../../assets/Nexa-logo.png";
const HomeHeader = () => {
  return (
    <div className="border-gray-900 border-b">
      <div className="mx-auto max-w-7xl py-3 px-3 xl:px-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-7 md:w-11" src={nexaLogo} alt="Nexa Logo" />
            <h1 className="text-white font-medium md:text-xl">Nexa</h1>
          </div>
          <div className="flex items-center gap-5">
            <NavLink
              to={"/login"}
              className="text-gray-400 cursor-pointer font-medium text-sm md:text-[16px] transition duration-200 hover:text-gray-200"
            >
              Log in
            </NavLink>
            <NavLink
              to={"/register"}
              className="text-white bg-[#5434BF] py-2 px-5 rounded-[10px] cursor-pointer font-medium text-sm md:text-[16px] hover:bg-[#3b18af] transition duration-300"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
