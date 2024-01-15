import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerContent from "../components/Common/PageBannerContent";
import BlogContent from "../components/BlogOne/BlogContent";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";

const BlogPageOne = () => {
  return (
    <>
      <Navbar />

      <PageBannerContent 
        pageTitle="Blog" 
        pageCaption="Our latest news"
        bgImage="/images/page-title-bg2.jpg" 
      />

      <BlogContent />

      <AccountCreateArea />

      <Footer />
    </>
  );
};

export default BlogPageOne;
