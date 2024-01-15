import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div
        className="main-banner"
        style={{ backgroundImage: `url(/images/main-banner1.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                >
                  Easy free banking for entrepreneurs
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                >
                  Get the financial tools and insights to start, build, and grow
                  your business.
                </p>

                <Link
                  href="/contact"
                  className="btn btn-primary"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
