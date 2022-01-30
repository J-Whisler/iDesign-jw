import React from "react";
import "./Logo.scss";
import { motion } from "framer-motion";

const Logo = () => {
  const LogoAnimation = {
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
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="logo__container"
      variants={LogoAnimation}
      initial="hidden"
      animate="show"
    >
      <h4 className="logo">J.W.</h4>
    </motion.div>
  );
};

export default Logo;
