import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const SuccessStory = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="success-story-area ptb-70 pt-0">
        <div className="container">
          <div className="section-title">
            <h2>Business success story</h2>
          </div>

          <div className="success-story-inner">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="success-story-slides"
            >
              <SwiperSlide>
                <div className="single-success-story-box">
                  <div className="row m-0 align-items-center">
                    <div className="col-lg-6 col-md-6 p-0">
                      <div className="content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse.
                        </p>
                        <h3>
                          John Smith <span>CTO at EnvyTheme</span>
                        </h3>

                        <div
                          className="btn btn-primary"
                          onClick={() => setToggler(!toggler)}
                        >
                          Watch Video
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 p-0">
                      <div className="image">
                        <img
                          src="/images/success-story1.jpg"
                          className="w-100"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-success-story-box">
                  <div className="row m-0 align-items-center">
                    <div className="col-lg-6 col-md-6 p-0">
                      <div className="content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse.
                        </p>
                        <h3>
                          John Smith <span>CTO at EnvyTheme</span>
                        </h3>
                        <div
                          className="btn btn-primary"
                          onClick={() => setToggler(!toggler)}
                        >
                          Watch Video
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 p-0">
                      <div className="image">
                        <img
                          src="/images/success-story1.jpg"
                          className="w-100"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStory;
