import React from "react";
import Link from "next/link";

const AccountCreateArea = () => {
  return (
    <>
      <div className="account-create-area">
        <div className="container account-create-content">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2>Apply for an account in minutes</h2>
              <p>Get your Haiper account today!</p>
            </div>

            <div className="col-lg-4">
              <div className="create-account">
                <Link href="/sign-up" className="btn btn-primary">
                  Get Your Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCreateArea;
