import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Partners = () => {
  return (
    <>
      <div className="partner-area-two ptb-70">
        <div className="container">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner1.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner2.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner3.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner4.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner5.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner3.png" alt="image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
