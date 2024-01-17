import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/virtual";
import SwiperCore from "swiper";
import { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const RunningSlider = ({ slides }) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        speed={2000}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ cursor: "pointer" }}>
            <div className="slider-content">
              {slide.proName}
              {slide.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RunningSlider;
