import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./HomeButton.scss";
import { motion } from "framer-motion";

const HomeButton = () => {
  const HomeButtonAnimation = {
    hidden: {
      opacity: 0,
      y: "-50vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="homeButton__container"
      variants={HomeButtonAnimation}
      initial="hidden"
      animate="show"
    >
      <Link to="/" className="link">
        <FontAwesomeIcon icon={faHome} className="icon" />
      </Link>
    </motion.div>
  );
};

export default HomeButton;
