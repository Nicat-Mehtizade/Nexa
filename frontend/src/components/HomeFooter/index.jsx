import { LuPanelsTopLeft } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { HiMiniUsers } from "react-icons/hi2";
import { FaChartLine } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";

const HomeFooter = () => {
  return (
    <div className="py-5">
      <div className="mx-auto max-w-7xl">
        <div className="px-5 xl:px-0">
          <h1 className="text-white text-xl lg:text-3xl font-medium text-center mb-3">
            Everything your team needs
          </h1>
          <p className="text-gray-400 text-xs md:text-sm lg:text-[16px] font-medium text-center mb-3">
            Powerful features to help you plan, track, and deliver great
            products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 justify-between items-center gap-5 ">
            <div className="bg-[#0D0F16] border  border-gray-800 rounded-xl p-5">
              <div className="bg-[#211940] p-3 w-12 rounded-lg flex items-center justify-center mb-2">
                <LuPanelsTopLeft className="text-[#8E79ED] text-2xl" />
              </div>
              <h1 className="text-white font-medium mb-2">
                Project Management
              </h1>
              <p className="text-gray-400 font-medium text-xs">
                Plan projects, set milestones, and track progress in real time.
              </p>
            </div>
            <div className="bg-[#0D0F16] border  border-gray-800 rounded-xl p-5 ">
              <div className="bg-[#1C3225] p-3 w-12 rounded-lg flex items-center justify-center mb-2">
                <LuCircleCheckBig className="text-[#72DA81] text-2xl" />
              </div>
              <h1 className="text-white font-medium mb-2">Issue Tracking</h1>
              <p className="text-gray-400 font-medium text-xs">
                Create, assign, and prioritize issues with custom workflows.
              </p>
            </div>
            <div className="bg-[#0D0F16] border  border-gray-800 rounded-xl p-5 ">
              <div className="bg-[#38271A] p-3 w-12 rounded-lg flex items-center justify-center mb-2">
                <HiMiniUsers className="text-[#ED9432] text-2xl" />
              </div>
              <h1 className="text-white font-medium mb-2">
                Team Collaboration
              </h1>
              <p className="text-gray-400 font-medium text-xs">
                Comment, mention teammates, and stay aligned in one place.
              </p>
            </div>
            <div className="bg-[#0D0F16] border  border-gray-800 rounded-xl p-5 ">
              <div className="bg-[#192346] p-3 w-12 rounded-lg flex items-center justify-center mb-2">
                <FaChartLine className="text-[#5079EF] text-2xl" />
              </div>
              <h1 className="text-white font-medium mb-2">
                Analytics & Reports
              </h1>
              <p className="text-gray-400 font-medium text-xs">
                Get insights into your team's performance and project health.
              </p>
            </div>
            <div className="bg-[#0D0F16] border  border-gray-800 rounded-xl p-5 ">
              <div className="bg-[#211940] p-3 w-12 rounded-lg flex items-center justify-center mb-2">
                <FaBoltLightning className="text-[#8E79ED] text-2xl" />
              </div>
              <h1 className="text-white font-medium mb-2">Built for Speed</h1>
              <p className="text-gray-400 font-medium text-xs">
                Fast, responsive, and reliable. Focus on building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
