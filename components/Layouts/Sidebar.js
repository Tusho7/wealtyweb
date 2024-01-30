import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/credentialsSlice";
import Link from "next/link";

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.credentials);

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const handleLogout = () => {
    dispatch(removeUser());
    router.push("/");
  };

  return (
    <div className="sidebar-container">
      <Link
        href={"/profile/" + user.customerId}
        className={`sidebar-links ${
          currentPath.includes("/profile/") && "sidebar-links-active"
        }`}
      >
        <Image src="/images/user.svg" alt="user" width={24} height={24} />
        პროფილი
      </Link>
      <Link href="/transactions" className="sidebar-links">
        <Image
          src="/images/refresh-circle.svg"
          alt="transaction icon"
          width={24}
          height={24}
        />
        ტრანზაქცია
      </Link>
      <button className="sidebar-links" onClick={handleLogout}>
        <Image src="/images/logout.svg" alt="logout" width={24} height={24} />
        გასვლა
      </button>
    </div>
  );
};

export default Sidebar;
