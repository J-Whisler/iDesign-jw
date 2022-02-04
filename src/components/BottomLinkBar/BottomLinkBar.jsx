import React from "react";
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
