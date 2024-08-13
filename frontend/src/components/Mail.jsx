import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoArchiveOutline } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaCaretDown, FaKeyboard } from "react-icons/fa";
import { RiSpam2Line } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";

const arr1 = [
  {
    item: <IoArchiveOutline />,
  },
  {
    item: <RiSpam2Line />,
  },
  {
    item: <MdOutlineDeleteOutline />,
  },
];

const arr2 = [
  {
    item: <IoMailUnreadOutline />,
  },
  {
    item: <HiOutlineFolderAdd />,
  },
  {
    item: <BsThreeDotsVertical />,
  },
];

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-5 text-gray-700 py-2">
          <div
            className="hover:bg-gray-200 rounded-full p-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <IoMdArrowBack size={"18px"} />
          </div>

          <div className="flex gap-4 cursor-pointer">
            {arr1.map((item, index) => (
              <div key={index}>{item.item}</div>
            ))}
          </div>
          <div>
            <PiLineVerticalThin />
          </div>

          <div className="flex gap-4 cursor-pointer">
            {arr2.map((item, index) => (
              <div key={index}>{item.item}</div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mr-5">
          <span className="text-[13px] hover:bg-gray-200 rounded-md">
            1-50 of 100
          </span>
          <div className="flex gap-4">
            <MdKeyboardArrowLeft size={"20px"} />
            <MdKeyboardArrowRight size={"20px"} />
          </div>
          <div className="flex items-center gap-1">
            <FaKeyboard />
            <FaCaretDown />
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Mail;
