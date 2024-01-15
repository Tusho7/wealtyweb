import React from "react";
import Link from "next/link";

const BlogCard = () => {
  return (
    <>
      <div className="row">
        {/* Blog post one */}
        <div className="col-lg-6 col-md-6">
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
                <Link href="/single-blog#">
                  The security risks of changing package owners
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna...
              </p>
              <Link href="/single-blog" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Blog post two */}
        <div className="col-lg-6 col-md-6">
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
                  Tips for protecting business and Family
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna...
              </p>
              <Link href="/single-blog" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Blog post three */}
        <div className="col-lg-6 col-md-6">
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
                  Protect Your workplace from cyber attacks
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna...
              </p>
              <Link href="/single-blog" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Blog post four */}
        <div className="col-lg-6 col-md-6">
          <div className="single-blog-post">
            <div className="blog">
              <Link href="/single-blog">
                <img src="/images/blog/blog4.jpg" alt="image" />
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
                  December 17, 2022
                </li>
              </ul>

              <h3>
                <Link href="/single-blog">
                  Business debit Fees to increase in 2022
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna...
              </p>
              <Link href="/single-blog" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Blog post five */}
        <div className="col-lg-6 col-md-6">
          <div className="single-blog-post">
            <div className="blog">
              <Link href="/single-blog">
                <img src="/images/blog/blog5.jpg" alt="image" />
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
                  December 18, 2022
                </li>
              </ul>

              <h3>
                <Link href="/single-blog">
                  10 tips to reduce your card processing costs
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna...
              </p>
              <Link href="/single-blog" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Blog post six */}
        <div className="col-lg-6 col-md-6">
          <div className="single-blog-post">
            <div className="blog">
              <Link href="/single-blog">
                <img src="/images/blog/blog6.jpg" alt="image" />
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
                  December 19, 2022
                </li>
              </ul>

              <h3>
                <Link href="/single-blog">
                  The PayPal here card reader review 2020
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna...
              </p>
              <Link href="/single-blog" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="col-lg-12 col-md-12">
          <div className="pagination-area">
            <a href="#" className="prev page-numbers">
              <i className="fas fa-angle-double-left"></i>
            </a>

            <a href="#" className="page-numbers">
              1
            </a>

            <span className="page-numbers current" aria-current="page">
              2
            </span>

            <a href="#" className="page-numbers">
              3
            </a>

            <a href="#" className="page-numbers">
              4
            </a>

            <a href="#" className="next page-numbers">
              <i className="fas fa-angle-double-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
