import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-woman-area overflow-hidden">
        <div className="container">
          <ul className="banner-woman-list">
            <li>
              <i className="fa-solid fa-user"></i> Over 10 million customers
            </li>
            <li>
              <i className="fa-solid fa-certificate"></i> FCA regulated
            </li>
          </ul>

          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="main-banner-woman-content">
                <h1
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                >
                  Easy, fee-free banking for entrepreneurs
                </h1>

                <p
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                >
                  Get the financial tools and insights to start, build, and grow
                  your business.
                </p>

                <ul
                  className="btn-list"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <li>
                    <Link href="/contact" className="btn btn-primary">
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="discover-more-btn">
                      Discover More{" "}
                      <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="main-banner-woman-image">
                <img
                  src="/images/home-six/banner/banner-woman.png"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                />
                <div className="woman-shape">
                  <img
                    src="/images/home-six/banner/woman-shape-1.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-woman-shape">
          <img src="/images/home-six/banner/woman-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
