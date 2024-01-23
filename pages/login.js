import React from "react";
import Link from "next/link";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="login-area">
        <div className="login-container">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="login-content">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="login-form">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/images/logo.png"
                          alt="image"
                          className="logo-image-size"
                        />
                      </Link>
                    </div>

                    <h3>ანგარიშზე შესვლა</h3>

                    <LoginForm />
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
