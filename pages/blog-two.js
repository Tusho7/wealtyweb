import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerContent from "../components/Common/PageBannerContent";
import BlogContent from "../components/BlogTwo/BlogContent";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";

const BlogPageTwo = () => {
  return (
    <>
      <Navbar />

      <PageBannerContent
        pageTitle="Blog with sidebar"
        pageCaption="Our latest news"
        bgImage="/images/page-title-bg1.jpg" 
      />

      <BlogContent />

      <AccountCreateArea />

      <Footer />
    </>
  );
};

export default BlogPageTwo;
