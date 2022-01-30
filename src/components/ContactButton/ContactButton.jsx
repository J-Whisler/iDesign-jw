import React from "react";
import "./ContactButton.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactButton = () => {
  const ContacAnimation = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 1.2,
      },
    },
  };
  return (
    <motion.div
      className="contactButton__container"
      variants={ContacAnimation}
      initial="hidden"
      animate="show"
    >
      <Link to="/contact" className="link">
        Contact Me
      </Link>
    </motion.div>
  );
};

export default ContactButton;
