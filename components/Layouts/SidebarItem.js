import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SidebarItem = ({ src, alt, title, pathname }) => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  return (
    <Link
      href={pathname}
      className={`sidebar-links ${
        currentPath.includes(pathname) && "sidebar-links-active"
      }`}
    >
      <Image src={src} alt={alt} width={24} height={24} />
      {title}
    </Link>
  );
};

export default SidebarItem;
