import React from "react";
const InformationArea = () => {
  const slides = [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "US 100",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR to USD",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "US 100",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR to USD",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR to USD",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
  ];

  return (
    <>
      <div className="information-area">
        <div className="horizontalScroll">
          <div className="scrollContent">
            <div className="contentItem">Item 1</div>
            {slides.map((slide, index) => (
              <div className="contentItem" key={index}>
                {slide.title}-{slide.proName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationArea;
