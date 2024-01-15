import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const MainBannerSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation]}
        className="main-banner-slider"
      >
        <SwiperSlide>
          <div
            className="banner-slider-item"
            style={{
              backgroundImage: `url(/images/banner-slider/banner-slider1.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <h1>Save money in easy secure steps</h1>

                    <p>
                      Get the financial tools and insights to start, build, and
                      grow your business.
                    </p>

                    <Link href="/contact" className="btn btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="banner-slider-item"
            style={{
              backgroundImage: `url(/images/banner-slider/banner-slider2.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <h1>Celebrating a decade of powerful banking</h1>

                    <p>
                      Get the financial tools and insights to start, build, and
                      grow your business.
                    </p>

                    <Link href="/contact" className="btn btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="banner-slider-item"
            style={{
              backgroundImage: `url(/images/banner-slider/banner-slider3.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <h1>Easy free banking for entrepreneurs</h1>

                    <p>
                      Get the financial tools and insights to start, build, and
                      grow your business.
                    </p>

                    <Link href="/contact" className="btn btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBannerSlider;
