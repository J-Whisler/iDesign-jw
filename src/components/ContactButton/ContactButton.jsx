import React from "react";
import "./ContactButton.scss";
import { motion } from "framer-motion";

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
        delay: 2,
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
      <h6>Contact Me</h6>
    </motion.div>
  );
};

export default ContactButton;
