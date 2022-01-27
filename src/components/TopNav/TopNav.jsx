import React from "react";
import ContactButton from "../ContactButton/ContactButton";
import HomeButton from "../HomeButton/HomeButton";
import Logo from "../Logo/Logo";
import "./TopNav.scss";

const TopNav = () => {
  return (
    <div className="topNav__container container">
      <Logo />
      <HomeButton />
      <ContactButton />
    </div>
  );
};

export default TopNav;
