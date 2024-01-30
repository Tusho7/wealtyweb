import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/credentialsSlice";
import SidebarItem from "./SidebarItem";
import { logout } from "../../services/logout";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.credentials);

  const handleLogout = async () => {
    const response = await logout(user.token);
    if (response.status === 200) {
      dispatch(removeUser());
      router.push("/");
      window.localStorage.removeItem("authToken");
    }
  };

  const routes = [
    {
      src: "/images/user.svg",
      alt: "user",
      title: "პროფილი",
      pathname: "/profile/" + user.customerId,
    },
    {
      src: "/images/refresh-circle.svg",
      alt: "transaction icon",
      title: "ტრანზაქცია",
      pathname: "/transactions",
    },
  ];

  return (
    <div className="sidebar-container">
      {routes.map((route) => (
        <SidebarItem
          alt={route.alt}
          src={route.src}
          title={route.title}
          pathname={route.pathname}
        />
      ))}
      <button className="sidebar-links" onClick={handleLogout}>
        <Image src="/images/logout.svg" alt="logout" width={24} height={24} />
        გასვლა
      </button>
    </div>
  );
};

export default Sidebar;
