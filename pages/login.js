import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <div className="login-area">
        <div className="login-container">
          {/* <div className="col-lg-6 col-md-12 p-0">
            <div className="login-image">
              <img src="/images/login-bg.jpg" alt="image" />
            </div>
          </div> */}

          <div className="col-lg-6 col-md-12 p-0">
            <div className="login-content">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="login-form">
                    <div className="logo">
                      <Link href="/">
                        <img src="/images/logo.png" alt="image" className="logo-image-size"/>
                      </Link>
                    </div>

                    <h3>ანგარიშზე შესვლა</h3>
                    <p>
                      {/* New to Haiper?{" "} */}
                      {/* <Link href="/sign-up">
                        Sign up
                      </Link> */}
                    </p>

                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="მომხმარებელი"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="პაროლი"
                          className="form-control"
                        />
                      </div>

                      <Link href="/profile">
                        <button type="submit" className="btn btn-primary">
                          შესვლა
                        </button>
                      </Link>

                      {/* <div className="forgot-password">
                        <Link href="/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>

                      <div className="connect-with-social">
                        <button type="submit" className="facebook">
                          <i className="fab fa-facebook-square"></i> Connect
                          with Facebook
                        </button>
                        <button type="submit" className="google">
                          <i className="fab fa-google"></i> Connect with Google
                        </button>
                      </div> */}
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

export default LoginPage;
