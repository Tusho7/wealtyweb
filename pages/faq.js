import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerContent from "../components/Common/PageBannerContent";
import FaqContentArea from "../components/Faq/FaqContentArea";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";

const FaqPage = () => {
  return (
    <>
      <Navbar />

      <PageBannerContent
        pageTitle="FAQ"
        pageCaption="Frequently Asked Questions"
        bgImage="/images/page-title-bg2.jpg" 
      />

      <FaqContentArea />

      <AccountCreateArea />

      <Footer />
    </>
  );
};

export default FaqPage;
