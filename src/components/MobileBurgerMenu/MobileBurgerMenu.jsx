import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faHome,
  faProjectDiagram,
  faTimes,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { motion } from "framer-motion";
import "./MobileBurgerMenu.scss";

import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const MobileBurgerMenu = ({ setMobileMenuIsOpen }) => {
  const MobileMenuAnimation = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    show: {
      height: "100%",
      opacity: 1,

      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="mobileBurgerMenu__container"
      variants={MobileMenuAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="menu__header">
        <Logo />
        <div className="icon__container">
          <FontAwesomeIcon
            className="icon"
            icon={faTimes}
            onClick={() => setMobileMenuIsOpen(false)}
          />
        </div>
      </div>
      <div className="menu__pageLinks">
        <div className="link__container">
          <Link className="link" to="/">
            <FontAwesomeIcon className="icon" icon={faHome} />
            Home
          </Link>
        </div>
        <div className="link__container">
          <Link className="link" to="/about">
            <FontAwesomeIcon className="icon" icon={faUser} />
            About Me
          </Link>
        </div>
        <div className="link__container">
          <Link className="link" to="/projects">
            <FontAwesomeIcon className="icon" icon={faProjectDiagram} />
            My Projects
          </Link>
        </div>
        <div className="link__container">
          <Link className="link" to="/skills">
            <FontAwesomeIcon className="icon" icon={faTools} />
            My Skills
          </Link>
        </div>
        <div className="link__container">
          <Link className="link" to="/contact">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            Contact Me
          </Link>
        </div>
      </div>
      <div className="menu__socialLinks">
        <div className="icon__container">
          <a href="https://github.com/J-Whisler">
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
        </div>
        <div className="icon__container">
          <a href="https://www.linkedin.com/in/jacobwhisler/">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
        </div>
        <div className="icon__divider"></div>
        <div className="icon__container">
          <a href="/">
            <FontAwesomeIcon className="icon" icon={faFile} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileBurgerMenu;
