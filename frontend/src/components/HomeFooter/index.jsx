import { LuPanelsTopLeft } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { HiMiniUsers } from "react-icons/hi2";
import { FaChartLine } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";

const HomeFooter = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div>
          <h1>Everything your team needs</h1>
          <p>
            Powerful features to help you plan, track, and deliver great
            products.
          </p>
          <div>
            <div>
              <LuPanelsTopLeft />
            </div>
            <div>
              <LuCircleCheckBig />
            </div>
            <div>
              <HiMiniUsers />
            </div>
            <div>
              <FaChartLine />
            </div>
            <div>
              <FaBoltLightning />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
