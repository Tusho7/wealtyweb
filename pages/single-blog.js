import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerContent from "../components/Common/PageBannerContent";
import SingleBlogContent from "../components/SingleBlog/SingleBlogContent";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";

const SingleBlogPage = () => {
  return (
    <>
      <Navbar />

      <PageBannerContent
        pageTitle="Single blog"
        pageCaption="Our latest news"
        bgImage="/images/page-title-bg1.jpg" 
      />

      <SingleBlogContent />

      <AccountCreateArea />

      <Footer />
    </>
  );
};

export default SingleBlogPage;
