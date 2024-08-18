import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full mt-40">
      <form
        action=""
        className="flex flex-col bg-white gap-3 p-4 w-[30%] rounded-xl shadow-xl"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800 hover:font-bold cursor-pointer">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="password"
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
