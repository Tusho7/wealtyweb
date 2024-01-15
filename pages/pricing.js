import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerContent from "../components/Common/PageBannerContent";
import PricingCard from "../components/Pricing/PricingCard";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";

const PricingPage = () => {
  return (
    <>
      <Navbar />

      <PageBannerContent
        pageTitle="Transparent Pricing"
        pageCaption="Borderless account pricing"
        bgImage="/images/page-title-bg2.jpg" 
      />

      <PricingCard />

      <AccountCreateArea />

      <Footer />
    </>
  );
};

export default PricingPage;
