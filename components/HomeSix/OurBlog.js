import React from "react";
import Link from "next/link";

const OurBlog = () => {
  return (
    <>
      <div className="blog-wrap-area pt-100 pb-75">
        <div className="container">
          <div className="wrap-section-title">
            <span>Our Blog</span>
            <h2>We make banking faster & easier, so you can do more</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="image">
                  <Link href="/single-blog" className="d-block">
                    <img src="/images/home-six/blog1.jpg" alt="image" />
                  </Link>
                  <span className="date">October 30, 2022</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/single-blog">
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna ali
                  </p>

                  <Link href="/single-blog" className="read-more-btn">
                    Read more <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="image">
                  <Link href="/single-blog" className="d-block">
                    <img src="/images/home-six/blog2.jpg" alt="image" />
                  </Link>
                  <span className="date">October 30, 2022</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/single-blog">
                      The security risks of changing package owners
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna ali
                  </p>
                  <Link href="/single-blog" className="read-more-btn">
                    Read more <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="image">
                  <Link href="/single-blog" className="d-block">
                    <img src="/images/home-six/blog3.jpg" alt="image" />
                  </Link>
                  <span className="date">October 30, 2022</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/single-blog">
                      10 Tips To Reduce Your Card Processing Costs
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna ali
                  </p>
                  <Link href="/single-blog" className="read-more-btn">
                    Read more <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlog;
