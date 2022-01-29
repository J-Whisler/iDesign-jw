import React from "react";
import "./MobileBurgerButton.scss";

const MobileBurgerButton = () => {
  return (
    <div className="mobileBurgerButton__container">
      <div className="mobileBurgerButton__containerLine margin-bottom"></div>
      <div className="mobileBurgerButton__containerLine margin-bottom"></div>
      <div className="mobileBurgerButton__containerLine"></div>
    </div>
  );
};

export default MobileBurgerButton;
