import React from "react";
import { Link } from "react-router-dom";
import ProjectsButton from "../ProjectsButton/ProjectsButton";
import SkillsButton from "../SkillsButton/SkillsButton";
import "./BottomLinkBar.scss";

const BottomLinkBar = () => {
  return (
    <div className="bottomLinkBar__container">
      <ProjectsButton />
      <SkillsButton />
    </div>
  );
};

export default BottomLinkBar;
