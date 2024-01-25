import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  const user = useSelector((state) => state.credentials);

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = useState(true);
  const [userMenu, setUserMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu((prevState) => !prevState);
    setUserMenu(true);
  };

  const toggleUserMenuNavbar = () => {
    setUserMenu((prevState) => !prevState);
    setMenu(true);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";
  const classThree = userMenu ? "collapse" : "collapse navbar-collapse show";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="haiper-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="logo-image-size"
                />
              </Link>

              <div className="navbar-buttons-container">
                <button
                  onClick={toggleUserMenuNavbar}
                  className="user-menu-navbar-button"
                >
                  <Image
                    src="/images/user.svg"
                    alt="user"
                    width={24}
                    height={24}
                  />
                </button>
                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>
              </div>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <Link href="/" className={`nav-item`}>
                    <li className={`navbar-link`}>მთავარი</li>
                  </Link>

                  <Link href="/about-us/" className="nav-item">
                    <li
                      className={`navbar-link ${
                        currentPath == "/about-us/" && "active"
                      }`}
                    >
                      ჩვენ შესახებ
                    </li>
                  </Link>

                  <Link href="/pricing/" className="nav-item">
                    <li
                      className={`navbar-link ${
                        currentPath == "/pricing/" && "active"
                      }`}
                    >
                      ფასები
                    </li>
                  </Link>

                  <Link href="/" className="nav-item">
                    <li className="navbar-link">ბლოგი</li>
                  </Link>

                  <Link href="/contact/" className="nav-item">
                    <li
                      className={` navbar-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      კონტაქტი
                    </li>
                  </Link>
                </ul>
              </div>
              {user.firstName && (
                <div className={classThree}>
                  <ul className="navbar-nav profile-nav-container">
                    <li>
                      <Link
                        href="/"
                        className={`profile-nav-link ${
                          currentPath.includes("/profile/") &&
                          "profile-nav-link-active"
                        }`}
                      >
                        <Image
                          src="/images/user.svg"
                          alt="user"
                          width={24}
                          height={24}
                        />
                        პროფილი
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/about-us/"
                        className={`profile-nav-link ${
                          currentPath == "/about-us/" && "active"
                        }`}
                      >
                        <Image
                          src="/images/refresh-circle.svg"
                          alt="transaction icon"
                          width={24}
                          height={24}
                        />
                        ტრანზაქცია
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/pricing/"
                        className={`profile-nav-link ${
                          currentPath == "/pricing/" && "active"
                        }`}
                      >
                        <Image
                          src="/images/logout.svg"
                          alt="logout"
                          width={24}
                          height={24}
                        />
                        გასვლა
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              {!user.firstName && (
                <div className="others-options">
                  <Link href="/login" className="login-btn ">
                    შესვლა
                  </Link>
                </div>
              )}

              {user.firstName && (
                <Link
                  href={`/profile/${user.customerId}`}
                  className={`others-options others-options-name ${
                    currentPath.includes("/profile/") &&
                    "others-options-name-active"
                  }`}
                >
                  <Image
                    src="/images/user.svg"
                    alt="user"
                    width={24}
                    height={24}
                  />
                  <p>
                    {user.firstName} {user.lastName}
                  </p>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
