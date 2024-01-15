import React from "react";

const PageBannerContent = ({ pageTitle, pageCaption, bgImage }) => {
  return (
    <>
      <div className="page-title-area" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <p>{pageCaption}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBannerContent;
