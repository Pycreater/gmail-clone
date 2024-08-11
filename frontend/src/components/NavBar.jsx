import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FcSettings } from "react-icons/fc";
import { GrApps } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoFilterOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <RxHamburgerMenu size={21} />
          </div>
          <img
            className="w-8 cursor-pointer"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium cursor-pointer">
            Gmail
          </h1>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoSearch
            size={"24px"}
            className="text-gray-700 hover:bg-gray-200 rounded-full cursor-pointer"
          />

          <input
            className="bg-transparent w-full rounded-full outline-none px-1"
            type="text"
            placeholder="Search mail"
          />
          <div>
            <IoFilterOutline
              size={"24px"}
              className="text-gray-700 hover:bg-gray-200 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <RxQuestionMarkCircled size={"24px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <FcSettings size={"24px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <GrApps size={"24px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <CgProfile size={"24px"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
