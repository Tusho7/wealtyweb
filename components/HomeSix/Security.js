import React from "react";
import Link from "next/link";

const Security = () => {
  return (
    <>
      <div className="security-services-area pt-100 pb-75">
        <div className="container">
          <div className="wrap-section-title">
            <span>Security</span>
            <h2>We show our value by serving faithfully</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="security-services-card">
                <div className="icon">
                  <i className="flaticon-piggy-bank"></i>
                </div>
                <h3>Transparent Pricing</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>

                <Link href="#" className="read-more-btn">
                  Read more <i className="fa-solid fa-chevron-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="security-services-card">
                <div className="icon">
                  <i className="flaticon-data-encryption"></i>
                </div>
                <h3>Fully Encrypted</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>

                <Link href="#" className="read-more-btn">
                  Read more <i className="fa-solid fa-chevron-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="security-services-card">
                <div className="icon">
                  <i className="flaticon-shield"></i>
                </div>
                <h3>Safe and Secure</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>

                <Link href="#" className="read-more-btn">
                  Read more <i className="fa-solid fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
