import React from "react";

const AppDownloadContent = () => {
  return (
    <>
      <div className="app-download-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-image">
                <div className="main-image">
                  <img
                    src="/images/mobile-app1.png"
                    alt="image"
                    data-aos="fade-in"
                    data-aos-delay="100"
                    data-aos-duration="1200"
                  />
                  <img
                    src="/images/mobile-app2.png"
                    alt="image"
                    data-aos="fade-in"
                    data-aos-delay="200"
                    data-aos-duration="1200"
                  />
                </div>

                <div className="main-mobile-image">
                  <img src="/images/main-mobile.png" alt="image" />
                </div>

                <div className="circle-img">
                  <img src="/images/circle.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-download-content">
                <h2>You can find all the thing you need to payout</h2>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt.
                </p>

                <div className="btn-box">
                  <a
                    href="https://www.apple.com/app-store/"
                    className="app-store-btn"
                    target="_blank"
                  >
                    <i className="flaticon-apple"></i>
                    Download on
                    <span>App Store</span>
                  </a>

                  <a
                    href="https://play.google.com/store/apps"
                    className="play-store-btn"
                    target="_blank"
                  >
                    <i className="flaticon-play-store"></i>
                    Download on
                    <span>Google play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownloadContent;
