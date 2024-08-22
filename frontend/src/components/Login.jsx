import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/appSlice";
import { BASE_URI } from "../../constant";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const response = await axios.post(
        `${BASE_URI}/api/v1/user/login`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        dispatch(setAuthUser(response.data.user));
        navigate("/");
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
          Login
        </h1>

        <input
          type="email"
          name="email"
          onChange={changeHandler}
          placeholder="Email"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="password"
          name="password"
          onChange={changeHandler}
          placeholder="Password"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <button className="bg-gray-800 text-white hover:bg-gray-500 p-2 rounded-xl hover:font-bold text-xl shadow-md">
          Login
        </button>
        <p className="text-center ">
          Don{"'"}t have an account?{" "}
          <span className="text-md text-blue-500 hover:underline underline ">
            <Link to={"/signup"}>Signup</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
