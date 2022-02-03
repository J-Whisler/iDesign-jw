import React from "react";
import "./ContactMe.scss";
import { motion } from "framer-motion";

import ParticleComponent from "../../components/Particles/ParticleComponent";
import TopNav from "../../components/TopNav/TopNav";
import PageTitle from "../../components/PageTitle/PageTitle";

import LeftLinkBar from "../../components/LeftLinkBar/LeftLinkBar";
import BottomLinkBar from "../../components/BottomLinkBar/BottomLinkBar";
import DesktopSocials from "../../components/DesktopSocials/DesktopSocials";

import ContactMeImage from "../../assets/email.png";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactMe = () => {
  const ContentBoxAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      width: 0,
    },
    show: {
      opacity: 1,
      height: "50vh",
      width: "55vw",
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 4.5,
      },
    },
  };

  const ContentBoxMobileAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      width: 0,
    },
    show: {
      opacity: 1,
      height: "65vh",
      width: "85vw",
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 2,
      },
    },
  };
  const ContactImageAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 60,
        delay: 5,
      },
    },
  };

  const ContactImageMobileAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 60,
        delay: 3,
      },
    },
  };
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
      <motion.div
        className="contactMe__contentBox"
        variants={
          window.innerWidth > 820
            ? ContentBoxAnimation
            : ContentBoxMobileAnimation
        }
        initial="hidden"
        animate="show"
      >
        <div className="contactMe__contentBoxLeft">
          <motion.img
            className="contactMe__contentBoxLeftImage"
            src={ContactMeImage}
            alt="contact envelope"
            variants={
              window.innerWidth > 820
                ? ContactImageAnimation
                : ContactImageMobileAnimation
            }
            initial="hidden"
            animate="show"
          />
        </div>
        <motion.div className="contactMe__contentBoxRight">
          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactMe;
