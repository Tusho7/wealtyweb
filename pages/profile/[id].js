import Sidebar from "../../components/Layouts/Sidebar";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import UserProfileDescription from "../../components/UserProfileDescription/UserProfileDescription";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/credentialsSlice";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.localStorage.getItem("authToken")) {
      dispatch(addUser(JSON.parse(window.localStorage.getItem("authToken"))));
    }
  }, []);

  return (
    <div className="profile-container">
      <NavbarTwo />
      <div className="profile-main-content">
        <Sidebar />
        <UserProfileDescription />
      </div>
    </div>
  );
};

export default Profile;
