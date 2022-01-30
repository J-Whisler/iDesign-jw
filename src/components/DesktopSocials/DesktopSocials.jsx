import React from "react";
import "./DesktopSocials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const DesktopSocials = () => {
  const SocialsTextAnimation = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 3.2,
      },
    },
  };
  const InstagramAnimation = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 3.4,
      },
    },
  };
  const GithubAnimation = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 3.6,
      },
    },
  };
  const LinkedInAnimation = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 3.8,
      },
    },
  };
  const HorizontalAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    show: {
      width: "50%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 4.7,
      },
    },
  };
  const ResumeTextAnimation = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 4.9,
      },
    },
  };
  const ResumeAnimation = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 5.1,
      },
    },
  };
  const VerticalAnimation = {
    hidden: {
      height: "2rem",
      opacity: 0,
    },
    show: {
      height: "7rem",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 6.2,
        // damping: 12,
      },
    },
  };

  return (
    <div className="desktopSocials__container">
      <div className="desktopSocials__social">
        <motion.span
          className="desktopSocials__socialsTitle"
          variants={SocialsTextAnimation}
          initial="hidden"
          animate="show"
        >
          Socials
        </motion.span>
        <div className="icons">
          <motion.div
            className="icon__container"
            variants={InstagramAnimation}
            initial="hidden"
            animate="show"
          >
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="icon margin-bottom"
            />
          </motion.div>
          <motion.div
            className="icon__container"
            variants={GithubAnimation}
            initial="hidden"
            animate="show"
          >
            <FontAwesomeIcon icon={faGithub} className="icon margin-bottom" />
          </motion.div>
          <motion.div
            className="icon__container"
            variants={LinkedInAnimation}
            initial="hidden"
            animate="show"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </motion.div>
        </div>
        <motion.span
          className="horizontal"
          variants={HorizontalAnimation}
          initial="hidden"
          animate="show"
        ></motion.span>
      </div>
      <div className="desktopSocials__resume">
        <motion.span
          className="desktopSocials__resumeTitle"
          variants={ResumeTextAnimation}
          initial="hidden"
          animate="show"
        >
          Resume
        </motion.span>
        <div className="icons">
          <motion.div
            className="icon__container"
            variants={ResumeAnimation}
            initial="hidden"
            animate="show"
          >
            <FontAwesomeIcon icon={faFile} className="icon" />
          </motion.div>
        </div>
        <motion.span
          className="vertical"
          variants={VerticalAnimation}
          initial="hidden"
          animate="show"
        ></motion.span>
      </div>
    </div>
  );
};

export default DesktopSocials;
