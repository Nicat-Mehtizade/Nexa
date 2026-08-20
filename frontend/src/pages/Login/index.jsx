import nexaLogo from "../../assets/Nexa-logo.png";
import loginPhoto from "../../assets/Login-Photo.png";
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex min-h-screen items-center bg-[#070911] p-5 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="bg-[#0D0F16] mx-auto rounded-xl border border-gray-800 max-w-190">
          <div className="flex justify-between items-center p-3 border-b border-gray-800">
            <div className="flex items-center">
              <img className="w-7 md:w-11" src={nexaLogo} alt="Nexa Logo" />
              <h1 className="text-white font-medium md:text-xl">Nexa</h1>
            </div>
            <div className="flex items-center gap-2 md:gap-8">
              <NavLink
                to={"/"}
                className="text-gray-500 flex items-center text-xs md:text-sm gap-2 font-medium cursor-pointer transition duration-300 hover:text-gray-200"
              >
                <FaArrowLeft />
                Back to home
              </NavLink>
              <NavLink
                to={"/register"}
                className="text-white bg-[#5434BF] py-2 px-3 md:px-5 rounded-[10px] cursor-pointer font-medium text-xs md:text-sm md:text-[16px] hover:bg-[#3b18af] transition duration-300"
              >
                Register
              </NavLink>
            </div>
          </div>
          <div className="grid md:grid-cols-2 border gap-6 items-start  p-5">
            <div className="hidden rounded-lg border border-gray-800 bg-gradient-to-b from-[#0E0F1E] to-[#1a0f2c] px-8 pb-8 pt-16 md:block">
              <h1 className="text-3xl font-bold text-white">Welcome back</h1>

              <h1 className="mb-5 text-3xl font-bold text-[#876AE9]">
                Great to see you again!
              </h1>

              <p className="mb-8 text-sm font-medium text-gray-500">
                Log in to continue managing your projects, teams and tasks.
              </p>

              <img src={loginPhoto} alt="Photo" />
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl font-bold mb-1">
                Log in to Nexa
              </h1>
              <p className="text-gray-400 font-medium text-sm mb-15">
                Enter your credentials to access your account
              </p>
              <div>
                <div className="flex flex-col mb-8">
                  <label
                    className="text-white font-medium mb-1"
                    htmlFor="email"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="rounded-lg border border-transparent bg-[#111421] p-2 text-gray-500 placeholder:text-gray-500 transition-all duration-300 ease-in-out focus:border-[#3b18af] focus:outline-none focus:ring-2 focus:ring-[#3b18af]/30"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label
                    className="text-white font-medium mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="rounded-lg border border-transparent bg-[#111421] p-2 text-gray-500 placeholder:text-gray-500 transition-all duration-300 ease-in-out focus:border-[#3b18af] focus:outline-none focus:ring-2 focus:ring-[#3b18af]/30"
                  />
                </div>
                <div className="flex justify-end mb-8">
                  <button className="cursor-pointer text-[#876AE9] font-medium transition duration-300 hover:text-[#6d48e7]">
                    Forgot Password?
                  </button>
                </div>
                <button className="cursor-pointer rounded-lg mb-5 bg-[#5434BF] px-5 py-2 font-medium text-white transition duration-300 hover:bg-[#3b18af] w-full">
                  Log in
                </button>
                <div className="flex items-center text-sm md:text-[16px] justify-center gap-1 font-medium text-nowrap">
                  <p className="text-gray-500">Don't have an account?</p>
                  <NavLink
                    className="text-[#876AE9] transition duration-300 hover:text-[#6d48e7]"
                    to={"/register"}
                  >
                    Create one
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
