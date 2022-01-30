import React from "react";
import "./ProjectsButton.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectsButton = () => {
  const ProjectsButtonAnimation = {
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
        delay: 2.2,
      },
    },
  };

  return (
    <motion.div
      variants={ProjectsButtonAnimation}
      initial="hidden"
      animate="show"
    >
      <Link to="/projects" className="link">
        My Projects
      </Link>
    </motion.div>
  );
};

export default ProjectsButton;
