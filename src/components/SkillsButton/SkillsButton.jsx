import React from "react";
import "./SkillsButton.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SkillsButton = () => {
  const SkillsButtonAnimation = {
    hidden: {
      opacity: 0,
      y: "50vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 2.4,
      },
    },
  };

  return (
    <motion.div
      variants={SkillsButtonAnimation}
      initial="hidden"
      animate="show"
    >
      <Link to="/skills" className="link">
        My Skills
      </Link>
    </motion.div>
  );
};

export default SkillsButton;
