import React from "react";
import { Link } from "react-router-dom";
import "./AboutMeButton.scss";
import { motion } from "framer-motion";

const AboutMeButton = () => {
  const AboutButtonAnimation = {
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
        delay: 1.5,
      },
    },
  };
  return (
    <motion.div
      className="aboutMeButton__container"
      variants={AboutButtonAnimation}
      initial="hidden"
      animate="show"
    >
      <Link to="/about" className="link">
        About Me...
      </Link>
    </motion.div>
  );
};

export default AboutMeButton;
