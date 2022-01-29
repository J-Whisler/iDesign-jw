import React from "react";
import "./DesktopSocials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const DesktopSocials = () => {
  return (
    <div className="desktopSocials__container">
      <div className="desktopSocials__social">
        <span className="desktopSocials__socialsTitle">Socials</span>
        <div className="icons">
          <FontAwesomeIcon
            icon={faInstagramSquare}
            className="icon margin-bottom"
          />
          <FontAwesomeIcon icon={faGithub} className="icon margin-bottom" />
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </div>
        <span className="horizontal"></span>
      </div>
      <div className="desktopSocials__resume">
        <span className="desktopSocials__resumeTitle">Resume</span>
        <div className="icons">
          <FontAwesomeIcon icon={faFile} className="icon" />
        </div>
        <span className="vertical"></span>
      </div>
    </div>
  );
};

export default DesktopSocials;
