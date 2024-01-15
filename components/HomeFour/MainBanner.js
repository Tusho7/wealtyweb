import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="banner-section">
        <div className="container">
          <div className="row m-0 align-items-center">
            <div className="col-lg-5 col-md-12 p-0">
              <div className="hero-content">
                <h1>Fast and easy business banking</h1>
                <p>
                  Get the financial tools and insights to start, build, and grow
                  your business.
                </p>

                <Link href="/sign-up" className="btn btn-primary">
                  Create your account
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-12 p-0">
              <div className="hero-image">
                <div className="main-image">
                  <img
                    src="/images/banner-image/banner-image1.png"
                    className="animate__animated animate__zoomIn animate__delay-0.7s"
                    alt="image"
                  />

                  <img
                    src="/images/banner-image/banner-image2.png"
                    className="animate__animated animate__fadeInLeft animate__delay-1.3s"
                    alt="image"
                  />

                  <img
                    src="/images/banner-image/banner-image3.png"
                    className="animate__animated animate__zoomIn animate__delay-1s"
                    alt="image"
                  />
                </div>

                <div className="main-mobile-image">
                  <img
                    src="/images/banner-image/banner-main-pic.png"
                    className="animate__animated animate__fadeInUp animate__delay-0.7s"
                    alt="image"
                  />
                </div>

                <div className="circle-image">
                  <img
                    src="/images/banner-image/circle1.png"
                    className="animate__animated animate__fadeInUp animate__delay-1s"
                    alt="image"
                  />
                </div>

                <div
                  onClick={() => setToggler(!toggler)}
                  className="video-btn"
                >
                  <i className="fas fa-play mr-2"></i>
                  Play Video
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
