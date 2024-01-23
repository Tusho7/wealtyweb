import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div>
        <Image src="/images/user.svg" alt="user" />
        პროფილი
      </div>
      <div>ტრანზაქცია</div>
      <div>გასვლა</div>
    </div>
  );
};

export default Sidebar;
