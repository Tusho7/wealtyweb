import React from "react";
import Link from "next/link";

const GlobalSupport = () => {
  return (
    <>
      <div className="support-area ptb-70 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="support-image"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <img src="/images/support-img1.png" alt="image" />
                <img src="/images/support-img2.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="support-content">
                <h2>Global support in a range of languages</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/contact" className="btn btn-primary">
                  Find Out More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalSupport;
