import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./HomeButton.scss";

const HomeButton = () => {
  return (
    <div className="homeButton__container">
      <FontAwesomeIcon icon={faHome} className="icon" />
    </div>
  );
};

export default HomeButton;
