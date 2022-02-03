import React from "react";
import "./PageTitle.scss";
import { motion } from "framer-motion";

const PageTitle = ({ children }) => {
  const PageTitleAnimation = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 0.2,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 6,
      },
    },
  };
  const PageTitleMobileAnimation = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 0.2,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 2.5,
      },
    },
  };
  return (
    <motion.div
      className="pageTitle__container"
      variants={
        window.innerWidth > 820 ? PageTitleAnimation : PageTitleMobileAnimation
      }
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

export default PageTitle;
