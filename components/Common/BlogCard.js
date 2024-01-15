import React from "react";
import Link from "next/link";

const BlogCard = () => {
  return (
    <>
      <div className="blog-area ptb-70 pb-50">
        <div className="container">
          <div className="section-title">
            <h2>The news from our blog</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="blog">
                  <Link href="/single-blog">
                    <img src="/images/blog/blog1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="blog-post-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="far fa-user"></i>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="far fa-calendar"></i>
                      December 15, 2022
                    </li>
                  </ul>

                  <h3>
                    <Link href="/single-blog">
                      The security risks of changing package owners
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna...
                  </p>
                  <Link href="/single-blog" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="blog">
                  <Link href="/single-blog">
                    <img src="/images/blog/blog2.jpg" alt="image" />
                  </Link>
                </div>

                <div className="blog-post-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="far fa-user"></i>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="far fa-calendar"></i>
                      December 16, 2022
                    </li>
                  </ul>

                  <h3>
                    <Link href="/single-blog">
                      Tips to protecting business and family
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna...
                  </p>
                  <Link href="/single-blog" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="blog">
                  <Link href="/single-blog">
                    <img src="/images/blog/blog3.jpg" alt="image" />
                  </Link>
                </div>

                <div className="blog-post-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="far fa-user"></i>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="far fa-calendar"></i>
                      December 16, 2022
                    </li>
                  </ul>

                  <h3>
                    <Link href="/single-blog">
                      Protect your workplace from cyber attacks
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna...
                  </p>
                  <Link href="/single-blog" className="btn btn-primary">
                    Read More
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

export default BlogCard;
