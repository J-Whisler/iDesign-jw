import React from "react";
import "./MobileBurgerButton.scss";
import { motion } from "framer-motion";

const MobileBurgerButton = () => {
  const MobileBurgerAnimation = {
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
      className="mobileBurgerButton__container"
      variants={MobileBurgerAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="mobileBurgerButton__containerLine margin-bottom"></div>
      <div className="mobileBurgerButton__containerLine margin-bottom"></div>
      <div className="mobileBurgerButton__containerLine"></div>
    </motion.div>
  );
};

export default MobileBurgerButton;
