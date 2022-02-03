import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./ProjectCard.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    console.log("in view", inView);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={
        inView ? "projectCard__container inView" : "projectCard__container"
      }
      // variants={
      //   window.innerWidth > 820
      //     ? ProjectCardAnimation
      //     : ProjectCardMobileAnimation
      // }
      // initial="hidden"
      // animate="show"
    >
      <div className="projectCard__header">
        <div className="projectCard__title">
          <h3>
            {project.name}
            <FontAwesomeIcon icon={project.icon} className="icon" />
          </h3>
          <span>{project.subName}</span>
        </div>
        <div className="projectCard__number">
          <span>{project.id}</span>
        </div>
      </div>

      <div className="projectCard__description">
        <p>{project.description}</p>
      </div>
      <div className="projectCard__button">
        <a
          href={project.buttonLink}
          target="_blank"
          className="projectCard__buttonLink"
        >
          <button>See {project.name}</button>
        </a>
      </div>
      <div className="projectCard__toolsUsed">
        <div className="toolsUsed__title">
          <h6>Tools Used: </h6>
        </div>
        <div className="toolsUsed__toolsList">
          {project.toolsUsed.map((tool) => (
            <a className="link" href={tool.link}>
              <span className="tool">{tool.toolName}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
