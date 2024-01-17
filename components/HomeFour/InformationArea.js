import React from "react";
import RunningSlider from "./components/RunningSlider";
const InformationArea = () => {
  const slides = [
    <div key="1">Your content 1</div>,
    <div key="2">Your content 2</div>,
    <div key="3">Your content 3</div>,
  ];
  return (
    <>
      <div className="information-area">
        {/*
      <div className="container">
          <div className="row align-items-center"></div>
        </div>*/}
        <RunningSlider />
      </div>
    </>
  );
};

export default InformationArea;
