import React from "react";
import "./ContactMe.scss";

import ParticleComponent from "../../components/Particles/ParticleComponent";
import TopNav from "../../components/TopNav/TopNav";
import PageTitle from "../../components/PageTitle/PageTitle";

import LeftLinkBar from "../../components/LeftLinkBar/LeftLinkBar";
import BottomLinkBar from "../../components/BottomLinkBar/BottomLinkBar";
import DesktopSocials from "../../components/DesktopSocials/DesktopSocials";

import ContactMeImage from "../../assets/email.png";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <div className="contactMe__container container">
      <ParticleComponent theme="theme4" />
      <TopNav />
      {window.innerWidth > 820 && <LeftLinkBar />}
      {window.innerWidth > 820 && <BottomLinkBar />}
      {window.innerWidth > 820 && <DesktopSocials />}
      <PageTitle>
        <h2 className="contactMe__Title">Contact</h2>
      </PageTitle>
      <div className="contactMe__contentBox">
        <div className="contactMe__contentBoxLeft">
          <img
            className="contactMe__contentBoxLeftImage"
            src={ContactMeImage}
            alt="contact envelope"
          />
        </div>
        <div className="contactMe__contentBoxRight">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
