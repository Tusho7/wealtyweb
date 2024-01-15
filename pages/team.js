import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerContent from "../components/Common/PageBannerContent";
import TeamMemberContent from "../components/Team/TeamMemberContent";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";

const TeamPage = () => {
  return (
    <>
      <Navbar />

      <PageBannerContent 
        pageTitle="Team" 
        pageCaption="Meet our expert team" 
        bgImage="/images/page-title-bg1.jpg" 
      />

      <TeamMemberContent />

      <AccountCreateArea />

      <Footer />
    </>
  );
};

export default TeamPage;
