import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerContent from "../components/Common/PageBannerContent";
import ContactContent from "../components/Contact/ContactContent";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <PageBannerContent
        pageTitle="Contact"
        pageCaption="If you have an idea, we would love to hear about it."
        bgImage="/images/page-title-bg1.jpg" 
      />

      <ContactContent />

      <AccountCreateArea />

      <Footer />
    </>
  );
};

export default ContactPage;
