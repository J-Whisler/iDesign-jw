import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./HomeButton.scss";

const HomeButton = () => {
  return (
    <div className="homeButton__container">
      <Link to="/" className="link">
        <FontAwesomeIcon icon={faHome} className="icon" />
      </Link>
    </div>
  );
};

export default HomeButton;
