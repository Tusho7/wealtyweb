import React from "react";
import Link from "next/link";

const PaymentFeatures = () => {
  return (
    <>
      <div className="payment-features-area ptb-70 overflow-hidden">
        <div className="container">
          <div className="payment-features-overview">
            <div className="payment-features-image">
              <div
                className="image"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <img src="/images/payment-features1.jpg" alt="image" />
              </div>
            </div>

            <div className="payment-features-content">
              <div className="content">
                <h2>Retail Payment Processing</h2>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="#" className="link-btn">
                  Get started now
                </Link>
              </div>
            </div>
          </div>

          <div className="payment-features-overview">
            <div className="payment-features-content">
              <div className="content">
                <h2>Online & eCom Payment Processing</h2>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="#" className="link-btn">
                  Get started now
                </Link>
              </div>
            </div>

            <div className="payment-features-image">
              <div
                className="image"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <img src="/images/payment-features2.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentFeatures;
