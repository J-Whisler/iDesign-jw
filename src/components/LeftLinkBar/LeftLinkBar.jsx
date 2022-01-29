import React from "react";
import { Link } from "react-router-dom";
import "./LeftLinkBar.scss";

const LeftLinkBar = () => {
  return (
    <div className="leftLinkBar__container">
      <Link to="/contact" className="link leftLinkBar__link">
        Contact Me
      </Link>
    </div>
  );
};

export default LeftLinkBar;
