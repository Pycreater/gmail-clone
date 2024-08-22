import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FcSettings } from "react-icons/fc";
import { GrApps } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoFilterOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAuthUser, setSearchText } from "../redux/appSlice";
import axios from "axios";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { user } = useSelector((store) => store.app);

  const logoutHandler = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/user/logout"
      );
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setAuthUser(null));
        // navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("error while logging out");
    }
  };

  useEffect(() => {
    dispatch(setSearchText(text));
  }, [text]);

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
      {user && (
        <>
          <div className="w-[50%] mr-60 ml-12">
            <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full focus-within:bg-white focus-within:shadow-md">
              <IoSearch
                size={"24px"}
                className="text-gray-700 hover:bg-gray-200 rounded-full cursor-pointer"
              />

              <input
                className="bg-transparent w-full rounded-full outline-none px-1"
                type="text"
                placeholder="Search mail"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div>
                <IoFilterOutline
                  size={"24px"}
                  className="text-gray-700 hover:bg-gray-200 rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <RxQuestionMarkCircled size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <FcSettings size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <GrApps size={"24px"} />
            </div>
            <span
              onClick={logoutHandler}
              className="underline cursor-pointer text-blue-400 hover:font-semibold"
            >
              Logout
            </span>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer ">
              <CgProfile size={"24px"} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
