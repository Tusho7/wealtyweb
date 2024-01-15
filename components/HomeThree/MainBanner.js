import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div
        className="main-banner-section"
        style={{
          backgroundImage: `url(/images/main-banner2.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      Easy, fee-free banking for entrepreneurs
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      Get the financial tools and insights to start, build, and
                      grow your business.
                    </p>

                    <Link
                      href="/about-us"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div
                    className="money-transfer-form"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                  >
                    <form>
                      <div className="form-group">
                        <label>You Send</label>
                        <div className="money-transfer-field">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="1,000"
                          />
                          <div className="amount-currency-select">
                            <i className="fas fa-chevron-down"></i>
                            <select>
                              <option>USD</option>
                              <option>EUR</option>
                              <option>GBP</option>
                              <option>BRL</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="currency-info">
                        <div className="bar"></div>
                        <span>
                          <strong>62.3</strong> Exchange Rate
                        </span>
                        <span>
                          <strong>$4.50</strong> Transition Fees
                        </span>
                      </div>

                      <div className="form-group">
                        <label>Recipient gets</label>
                        <div className="money-transfer-field">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="1,000"
                          />
                          <div className="amount-currency-select">
                            <i className="fas fa-chevron-down"></i>
                            <select>
                              <option>USD</option>
                              <option>EUR</option>
                              <option>GBP</option>
                              <option>BRL</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="money-transfer-info">
                        <span>
                          You could save vs banks <strong>1,010.32 USD</strong>
                        </span>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Get Started
                      </button>

                      <div className="terms-info">
                        <p>
                          By clicking continue, I agree with{" "}
                          <Link href="/terms-policy">Terms & Policy</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
