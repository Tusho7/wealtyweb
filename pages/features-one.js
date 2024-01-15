import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerContent from "../components/Common/PageBannerContent";
import ServicesCard from "../components/Common/ServicesCard";
import PartnerContent from "../components/Common/PartnerContent";
import AppDownloadContent from "../components/HomeOne/AppDownloadContent";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";

const FeaturesPageOne = () => {
  return (
    <>
      <Navbar />

      <PageBannerContent
        pageTitle="Our Features"
        pageCaption="All the tools you need"
        bgImage="/images/page-title-bg1.jpg" 
      />

      <ServicesCard />

      <PartnerContent />

      <AppDownloadContent />

      <AccountCreateArea />

      <Footer />
    </>
  );
};

export default FeaturesPageOne;
