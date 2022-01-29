import React from "react";
import AboutMeButton from "../AboutMeButton/AboutMeButton";
import HomeButton from "../HomeButton/HomeButton";
import Logo from "../Logo/Logo";
import MobileBurgerButton from "../MobileBurgerButton/MobileBurgerButton";
import "./TopNav.scss";

const TopNav = () => {
  return (
    <div className="topNav__container">
      <Logo />
      <HomeButton />
      {window.innerWidth > 820 && <AboutMeButton />}
      {window.innerWidth < 820 && <MobileBurgerButton />}
    </div>
  );
};

export default TopNav;
