import nexaLogo from "../../assets/Nexa-logo.png";
import RegisterPhoto from "../../assets/Register-Photo.png";
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Register = () => {
  const [roles, setRoles] = useState([]);
  const [loadingRoles, setLoadingRoles] = useState(true);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/roles`,
        );

        setRoles(response.data.roles);
      } catch (error) {
        console.error("Roles could not be fetched:", error);
      } finally {
        setLoadingRoles(false);
      }
    };

    fetchRoles();
  }, []);

  if (loadingRoles) {
    return <div>Loading roles...</div>;
  }

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
                to={"/login"}
                className="text-white bg-[#5434BF] py-2 px-3 md:px-5 rounded-[10px] cursor-pointer font-medium text-xs md:text-sm md:text-[16px] hover:bg-[#3b18af] transition duration-300"
              >
                Login
              </NavLink>
            </div>
          </div>
          <div className="grid md:grid-cols-2 border gap-6 items-start  p-5">
            <div className="hidden rounded-lg border border-gray-800 bg-gradient-to-b from-[#0E0F1E] to-[#1a0f2c] px-8 pb-8 pt-16 md:block">
              <h1 className="mb-5 text-3xl font-bold text-[#876AE9]">
                Create your <span>Nexa</span> account
              </h1>
              <img src={RegisterPhoto} alt="Photo" />
            </div>
            <div>
              <h1 className="text-white text-xl font-bold mb-1">
                Create your account
              </h1>
              <p className="text-gray-400 font-medium text-sm mb-8">
                Fil in the details below to get started
              </p>
              <div>
                <div className="flex flex-col mb-3">
                  <label
                    className="text-white font-medium mb-1"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    className="rounded-lg border border-transparent bg-[#111421] p-2 text-gray-500 placeholder:text-gray-500 transition-all duration-300 ease-in-out focus:border-[#3b18af] focus:outline-none focus:ring-2 focus:ring-[#3b18af]/30"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label
                    className="text-white font-medium mb-1"
                    htmlFor="email"
                  >
                    Your role
                  </label>
                  <select
                    name="role"
                    id="role"
                    disabled={loadingRoles}
                    className="cursor-pointer rounded-lg border border-transparent bg-[#111421] p-2 text-gray-400 transition-all duration-300 ease-in-out focus:border-[#3b18af] focus:outline-none focus:ring-2 focus:ring-[#3b18af]/30 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">
                      {loadingRoles ? "Loading roles..." : "Select your role"}
                    </option>

                    {roles.map((group) => (
                      <optgroup key={group.category} label={group.category}>
                        {group.roles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mb-3">
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
                <button className="cursor-pointer rounded-lg mb-5 bg-[#5434BF] px-5 py-2 font-medium text-white transition duration-300 hover:bg-[#3b18af] w-full">
                  Register
                </button>
                <div className="flex items-center text-sm md:text-[16px] justify-center gap-1 font-medium text-nowrap">
                  <p className="text-gray-500">Already have an account?</p>
                  <NavLink
                    className="text-[#876AE9] transition duration-300 hover:text-[#6d48e7]"
                    to={"/login"}
                  >
                    Log in
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

export default Register;
