import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/credentialsSlice";

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const handleLogout = () => {
    dispatch(removeUser());
    router.push("/");
  };

  return (
    <div className="sidebar-container">
      <div
        className={`sidebar-links ${
          currentPath.includes("/profile/") && "sidebar-links-active"
        }`}
      >
        <Image src="/images/user.svg" alt="user" width={24} height={24} />
        პროფილი
      </div>
      <div className="sidebar-links">
        <Image
          src="/images/refresh-circle.svg"
          alt="transaction icon"
          width={24}
          height={24}
        />
        ტრანზაქცია
      </div>
      <button className="sidebar-links" onClick={handleLogout}>
        <Image src="/images/logout.svg" alt="logout" width={24} height={24} />
        გასვლა
      </button>
    </div>
  );
};

export default Sidebar;
