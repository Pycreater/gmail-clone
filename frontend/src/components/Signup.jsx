import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        navigate("/login");
        toast.success(response.data.message);
      }

      // console.log(response.data);
    } catch (error) {
      console.log(error);
      // toast.success(response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full mt-40">
      <form
        onSubmit={submitHandler}
        className="flex flex-col bg-white gap-3 p-4 w-[30%] rounded-xl shadow-xl"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800 hover:font-bold cursor-pointer">
          Signup
        </h1>
        <input
          value={input.fullName}
          name="fullName"
          onChange={changeHandler}
          type="text"
          placeholder="Name"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          value={input.email}
          name="email"
          onChange={changeHandler}
          type="email"
          placeholder="Email"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          value={input.password}
          name="password"
          onChange={changeHandler}
          type="password"
          placeholder="Password"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <button className="bg-gray-800 text-white hover:bg-gray-500 p-2 rounded-xl hover:font-bold text-xl">
          Signup
        </button>
        <p className="text-center ">
          Already have an account?{" "}
          <span className="text-md text-blue-500 hover:underline underline ">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
