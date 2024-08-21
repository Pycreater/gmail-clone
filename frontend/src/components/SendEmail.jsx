import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setEmails, setOpen } from "../redux/appSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const SendEmail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const { open, emails } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/email/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log(response.data);
      dispatch(setEmails([...emails, response.data.email]));
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Email send failed!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Email send failed!!");
    }
    dispatch(setOpen(false));
  };

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex items-center justify-between px-3 py-2 bg-[#F2F6FC]">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross2 size={"20px"} />
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input
          type="text"
          onChange={changeHandler}
          name="to"
          placeholder="To"
          className="outline-none p-1"
        />
        <hr />
        <input
          type="text"
          onChange={changeHandler}
          name="subject"
          placeholder="Subject"
          className="outline-none p-1"
        />
        <hr />
        <textarea
          rows={"15"}
          cols={"30"}
          name="message"
          onChange={changeHandler}
          className="outline-none py-1"
        ></textarea>
        <button className="bg-blue-600 rounded-full px-5 py-1 text-white w-fit hover:font-semibold">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
