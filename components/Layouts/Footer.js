import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/footer-logo.png" alt="logo" className="logo-image-size"/>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                </div>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget pl-5">
                <h3>კომპანია</h3>

                <ul className="list">
                  <li>
                    <Link href="/about-us">ჩვენ შესახებ</Link>
                  </li>
                  <li>
                    <Link href="#">სერვისები</Link>
                  </li>
                  {/* <li>
                    <Link href="/features-one">მახასიათებლები</Link>
                  </li> */}
                  <li>
                    <Link href="/pricing">ჩვენი ფასები</Link>
                  </li>
                  <li>
                    <Link href="/blog-one">სიახლეები</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>მხარდაჭერა</h3>

                <ul className="list">
                  <li>
                    <Link href="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      Კონფიდენციალურობის პოლიტიკა
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-condition">წესები და პირობები</Link>
                  </li>
                  <li>
                    <Link href="#">საზოგადოება</Link>
                  </li>
                  <li>
                    <Link href="/contact">კონტაქტი</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>მისამართი</h3>

                <ul className="footer-contact-info">
                  <li>
                    <span className="mr-1">Location:</span>
                    27 Division St, New York, <br /> NY 10002, USA
                  </li>
                  <li>
                    <span className="mr-1">Email:</span>
                    info@haiper.com
                  </li>
                  <li>
                    <span className="mr-1">Phone:</span>+ (321) 984 754
                  </li>
                  <li>
                    <span className="mr-1">Fax:</span>
                    +1-212-9876543
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <p>
              © {currentYear} Haiper - All rights Reserved{" "}
              <a href="http://envytheme.com/" target="_blank">
                EnvyTheme.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
