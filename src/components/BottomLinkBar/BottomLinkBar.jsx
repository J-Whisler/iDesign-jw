import React from "react";
import { Link } from "react-router-dom";
import "./BottomLinkBar.scss";

const BottomLinkBar = () => {
  return (
    <div className="bottomLinkBar__container">
      <Link to="/projects" className="link">
        My Projects
      </Link>
      <Link to="/skills" className="link">
        My Skills
      </Link>
    </div>
  );
};

export default BottomLinkBar;
