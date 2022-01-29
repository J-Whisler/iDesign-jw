import React from "react";
import { Link } from "react-router-dom";
import "./AboutMeButton.scss";

const AboutMeButton = () => {
  return (
    <div className="aboutMeButton__container">
      <Link to="/about" className="link">
        About Me...
      </Link>
    </div>
  );
};

export default AboutMeButton;
