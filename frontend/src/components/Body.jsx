import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Body = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.app);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
