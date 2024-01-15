import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const CustomersFeedback = () => {
  return (
    <>
      <div className="feedback-area ptb-70 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>What customers say about Us</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="single-feedback">
                <i className="fas fa-quote-left quote-icon"></i>
                <p>
                  <q>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q>
                </p>

                <div className="client-img">
                  <img src="/images/clients/client1.jpg" alt="image" />
                  <h3>John Lucy</h3>
                  <span>Founder & Consultant</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback">
                <i className="fas fa-quote-left quote-icon"></i>
                <p>
                  <q>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q>
                </p>

                <div className="client-img">
                  <img src="/images/clients/client2.jpg" alt="image" />
                  <h3>John Smith</h3>
                  <span>CTO & Consultant</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback">
                <i className="fas fa-quote-left quote-icon"></i>
                <p>
                  <q>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q>
                </p>

                <div className="client-img">
                  <img src="/images/clients/client3.jpg" alt="image" />
                  <h3>Maxwel Warner</h3>
                  <span>Chief Manager</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback">
                <i className="fas fa-quote-left quote-icon"></i>
                <p>
                  <q>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q>
                </p>

                <div className="client-img">
                  <img src="/images/clients/client4.jpg" alt="image" />
                  <h3>Ross Taylor</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback">
                <i className="fas fa-quote-left quote-icon"></i>
                <p>
                  <q>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q>
                </p>

                <div className="client-img">
                  <img src="/images/clients/client5.jpg" alt="image" />
                  <h3>James Anderson</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomersFeedback;
