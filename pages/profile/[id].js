import axios from "axios";
import Cookies from "js-cookie";

import { useEffect, useCallback } from "react";
import MainNavbar from "../../components/Layouts/MainNavbar";
import { useRouter } from "next/router";
import { getCustomer } from "../../services/getCustomerById";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/credentialsSlice";
import Sidebar from "../../components/Layouts/Sidebar";

const Profile = () => {
  const router = useRouter();
  const token = Cookies.get("authToken");
  const dispatch = useDispatch();

  const fetchData = async () => {
    const { data } = await getCustomer(token, router);
    dispatch(addUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="profile-container">
      <MainNavbar />
      <div className="profile-main-content">
        <Sidebar />
      </div>
    </div>
  );
};

export default Profile;
