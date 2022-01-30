import React from "react";
import { Link } from "react-router-dom";
import ContactButton from "../ContactButton/ContactButton";
import "./LeftLinkBar.scss";

const LeftLinkBar = () => {
  return (
    <div className="leftLinkBar__container">
      <ContactButton />
    </div>
  );
};

export default LeftLinkBar;
