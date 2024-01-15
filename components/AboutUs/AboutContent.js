import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const AboutContent = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area ptb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span>How we were founded</span>
                <h2>Easy, fee-free banking for entrepreneurs</h2>
                <p>
                  Every month they moved their money the old way – which wasted
                  their time and money. So they invented a beautifully simple
                  workaround that became a billion-dollar business.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-img1.jpg" alt="image" />

                <div className="video-btn" onClick={() => setToggler(!toggler)}>
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
