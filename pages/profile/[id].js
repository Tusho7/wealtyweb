import Sidebar from "../../components/Layouts/Sidebar";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import UserProfileDescription from "../../components/UserProfileDescription/UserProfileDescription";

const Profile = () => {
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
