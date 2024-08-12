import { LuPencil } from "react-icons/lu";
import { FaInbox } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDrafts } from "react-icons/md";

const sideBarItems = [
  {
    item: <FaInbox size={"20px"} />,
    text: "Inbox",
  },
  {
    item: <IoIosStarOutline size={"20px"} />,
    text: "Starred",
  },
  {
    item: <FiClock size={"20px"} />,
    text: "Snoozed",
  },
  {
    item: <FaLocationArrow size={"20px"} />,
    text: "Sent",
  },
  {
    item: <MdOutlineDrafts size={"20px"} />,
    text: "Drafts",
  },
  {
    item: <IoIosArrowDown size={"20px"} />,
    text: "More",
  },
];

const SideBar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-600">
        {sideBarItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 pl-6 items-center py-1 rounded-full my-2 hover:cursor-pointer hover:bg-gray-300"
            >
              {item.item}
              <p>{item.text}</p>
            </div>
          );
        })}
        <div className="flex gap-4 pl-6 items-center py-1 rounded-full my-2 hover:cursor-pointer hover:bg-gray-300"></div>
      </div>
    </div>
  );
};

export default SideBar;
