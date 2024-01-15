import React from "react";
import Link from "next/link";

const PaymentExperience = () => {
  return (
    <>
      <div className="payment-experience-area bg-f4fcff ptb-70 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="payment-experience-content">
                <h2>Create seamless payment experiences</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel.
                </p>

                <Link href="#" className="link-btn">
                  Start with payments
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                className="payment-experience-image text-center"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <img src="/images/experience-img1.png" alt="image" />
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-payment-experience-box">
                <div className="icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Faster Growth</h3>
                <p>
                  Labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo viverra maecenas accumsan.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-payment-experience-box">
                <div className="icon">
                  <i className="fab fa-audible"></i>
                </div>
                <h3>Amazing Experiences</h3>
                <p>
                  Labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo viverra maecenas accumsan.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-payment-experience-box">
                <div className="icon">
                  <i className="fas fa-credit-card"></i>
                </div>
                <h3>Global Payments</h3>
                <p>
                  Labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo viverra maecenas accumsan.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-payment-experience-box">
                <div className="icon">
                  <i className="fab fa-expeditedssl"></i>
                </div>
                <h3>Secure Payments</h3>
                <p>
                  Labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo viverra maecenas accumsan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentExperience;
