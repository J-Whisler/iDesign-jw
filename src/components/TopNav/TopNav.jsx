import React, { useState } from "react";
import AboutMeButton from "../AboutMeButton/AboutMeButton";
import HomeButton from "../HomeButton/HomeButton";
import Logo from "../Logo/Logo";
import MobileBurgerButton from "../MobileBurgerButton/MobileBurgerButton";
import "./TopNav.scss";

import MobileBurgerMenu from "../MobileBurgerMenu/MobileBurgerMenu";

const TopNav = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <div className="topNav__container">
      <Logo />
      <HomeButton />
      {window.innerWidth > 820 && <AboutMeButton />}
      {window.innerWidth < 820 && (
        <MobileBurgerButton
          mobileMenuIsOpen={mobileMenuIsOpen}
          setMobileMenuIsOpen={setMobileMenuIsOpen}
        />
      )}
      {mobileMenuIsOpen && (
        <MobileBurgerMenu
          mobileMenuIsOpen={mobileMenuIsOpen}
          setMobileMenuIsOpen={setMobileMenuIsOpen}
        />
      )}
    </div>
  );
};

export default TopNav;
