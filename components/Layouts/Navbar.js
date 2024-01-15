import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
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

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="haiper-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
                <img src="/images/black-logo.png" alt="logo" />
              </Link>

              {/* Toggle navigation */}
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

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="#" 
                    >
                      Home <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          Home Demo - 1
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/index2/"
                          className={`nav-link ${
                            currentPath == "/index2/" && "active"
                          }`}
                        >
                          Home Demo - 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/index3/"
                          className={`nav-link ${
                            currentPath == "/index3/" && "active"
                          }`}
                        >
                          Home Demo - 3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/index4/"
                          className={`nav-link ${
                            currentPath == "/index4/" && "active"
                          }`}
                        >
                          Home Demo - 4
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/index5/"
                          className={`nav-link ${
                            currentPath == "/index5/" && "active"
                          }`}
                        >
                          Home Demo - 5
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/index6/"
                          className={`nav-link ${
                            currentPath == "/index6/" && "active"
                          }`}
                        >
                          Home Demo - 6
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-us/"
                      className={`nav-link ${
                        currentPath == "/about-us/" && "active"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className="nav-link"
                    >
                      Features <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/features-one/"
                          className={`nav-link ${
                            currentPath == "/features-one/" && "active"
                          }`}
                        >
                          Features Style One
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/features-two/"
                          className={`nav-link ${
                            currentPath == "/features-two/" && "active"
                          }`}
                        >
                          Features Style Two
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      Pages <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about-us/"
                          className={`nav-link ${
                            currentPath == "/about-us/" && "active"
                          }`}
                        >
                          About Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="#">
                          New Dropdown <i className="fas fa-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="#">2nd Level</Link>
                          </li>
                          <li className="nav-item">
                            <Link href="#">
                              Another Dropdown{" "}
                              <i className="fas fa-chevron-down"></i>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="#">
                                  3rd Level
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team/"
                          className={`nav-link ${
                            currentPath == "/team/" && "active"
                          }`}
                        >
                          Team
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pricing/"
                          className={`nav-link ${
                            currentPath == "/pricing/" && "active"
                          }`}
                        >
                          Pricing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                          FAQ
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/sign-up/"
                          className={`nav-link ${
                            currentPath == "/sign-up/" && "active"
                          }`}
                        >
                          Signup
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/login/"
                          className={`nav-link ${
                            currentPath == "/login/" && "active"
                          }`}
                        >
                          Login
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404/"
                          className={`nav-link ${
                            currentPath == "/404/" && "active"
                          }`}
                        >
                          404 Error Page
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/pricing/"
                      className={`nav-link ${
                        currentPath == "/pricing/" && "active"
                      }`}
                    >
                      Pricing
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      Blog <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog-one/"
                          className={`nav-link ${
                            currentPath == "/blog-one/" && "active"
                          }`}
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-two/"
                          className={`nav-link ${
                            currentPath == "/blog-two/" && "active"
                          }`}
                        >
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/single-blog/"
                          className={`nav-link ${
                            currentPath == "/single-blog/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-options">
                <Link href="/login" className="login-btn">
                  <i className="flaticon-user"></i> Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
