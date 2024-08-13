import { IoIosStarOutline } from "react-icons/io";
import { MdCropSquare } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();

  const openMail = () => {
    navigate("/mail/hhhs");
  };

  return (
    <div
      onClick={openMail}
      className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex gap-2">
        <div className="text-gray-400">
          <MdCropSquare size={"20px"} />
        </div>
        <div className="text-gray-400">
          <IoIosStarOutline size={"20px"} />
        </div>
        <div>
          <h1 className="font-semibold">Pratik</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate
      </div>
      <div className="flex-none text-sm">
        <p className="font-bold text-sm">6:23 AM</p>
      </div>
    </div>
  );
};

export default Email;
