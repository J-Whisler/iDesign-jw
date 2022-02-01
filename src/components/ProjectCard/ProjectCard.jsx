import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard__container">
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
              <span className="tool">#{tool.toolName}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
