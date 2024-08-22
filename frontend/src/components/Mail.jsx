import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { IoArchiveOutline } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaCaretDown, FaKeyboard } from "react-icons/fa";
import { RiSpam2Line } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { formatDistanceToNow } from "date-fns";
import { BASE_URI } from "../../constant";

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
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedEmail } = useSelector((store) => store.app);

  const deleteHandler = async () => {
    try {
      const response = await axios.delete(`${BASE_URI}/api/v1/email/${id}`, {
        withCredentials: true,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error("Failed to delete email");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the email");
      console.error("Delete error:", error);
    }
  };

  const arr1 = [
    {
      item: <IoArchiveOutline />,
    },
    {
      item: <RiSpam2Line />,
    },
    {
      item: <MdOutlineDeleteOutline onClick={deleteHandler} />,
    },
  ];

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
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex justify-between bg-white items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{selectedEmail?.subject}</h1>
            <span className="text-sm bg-gray-200 p-1 rounded-lg">Inbox x</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>
              {formatDistanceToNow(new Date(selectedEmail?.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{selectedEmail?.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10">{selectedEmail?.message}</div>
      </div>
    </div>
  );
};

export default Mail;
