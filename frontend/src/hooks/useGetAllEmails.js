import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const useGetAllEmails = () => {
  const dispatch = useDispatch();
  const { emails } = useSelector((store) => store.app);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/email/",
          { withCredentials: true }
        );
        // console.log(response.data);
        dispatch(setEmails(response.data.emails));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
};

export default useGetAllEmails;
