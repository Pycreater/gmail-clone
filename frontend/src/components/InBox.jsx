import { FaCaretDown, FaInbox } from "react-icons/fa";
import {
  MdCropSquare,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { IoMdRefresh, IoMdMore } from "react-icons/io";
import { FaKeyboard } from "react-icons/fa6";
import { GoPeople, GoTag } from "react-icons/go";
import { useState } from "react";
import Emails from "./Emails";

const mailType = [
  {
    icon: <FaInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <GoPeople size={"20px"} />,
    text: "Social",
  },
];

const InBox = () => {
  const [selected, setSelected] = useState();

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4 mr-6 my-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-4">
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
      <div className="h-90vh overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                onClick={() => setSelected(index)}
                className={`${
                  selected === index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-4 border-b-transparent "
                } flex items-center gap-5 p-4 w-52 hover:bg-gray-100`}
                key={index}
              >
                {item.icon}
                <span className="text-sm">{item.text}</span>
              </button>
            );
          })}
        </div>
        <Emails />
      </div>
    </div>
  );
};

export default InBox;
