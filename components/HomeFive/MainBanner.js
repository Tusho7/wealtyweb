import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="banner-wrapper overflow-hidden">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-wrapper-content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                >
                  Easy, fee-free banking for entrepreneurs
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

            <div className="col-lg-6 col-md-12">
              <div
                className="banner-wrapper-image"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <img src="/images/banner-img1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
