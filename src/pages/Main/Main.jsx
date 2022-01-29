import React, { useState } from "react";
import BottomLinkBar from "../../components/BottomLinkBar/BottomLinkBar";
import DesktopSocials from "../../components/DesktopSocials/DesktopSocials";
import LeftLinkBar from "../../components/LeftLinkBar/LeftLinkBar";
import ParticleComponent from "../../components/Particles/ParticleComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMapPin } from "@fortawesome/free-solid-svg-icons";

import TopNav from "../../components/TopNav/TopNav";
import "./Main.scss";
import { Link } from "react-router-dom";

import Me from "../../assets/main-right.png";

const Main = () => {
  const [centerIsClicked, setCenterIsClicked] = useState(false);
  console.log(centerIsClicked);
  return (
    <div className="main__container container">
      <ParticleComponent theme="theme" />
      <TopNav />
      {window.innerWidth > 820 && <LeftLinkBar />}
      {window.innerWidth > 820 && <BottomLinkBar />}
      {window.innerWidth > 820 && <DesktopSocials />}
      <div
        className={centerIsClicked ? "main__content clicked" : "main__content"}
        onClick={() => setCenterIsClicked(!centerIsClicked)}
      >
        <div className="main__contentCenterSpinner">
          <FontAwesomeIcon icon={faCode} className="icon" />
        </div>
        <div className="main__contentCenterSpinnerText">
          Click to see {centerIsClicked ? "less" : "more"}...
        </div>
      </div>
      {centerIsClicked ? (
        <>
          <div className="main__contentBox">
            <div className="main__contentBoxLeft">
              <h3>Hi! I'm Jacob!</h3>
              <p>I design and develop awesome websites just like this one!</p>
              <span>
                Cleveland, OH
                <FontAwesomeIcon icon={faMapPin} className="icon" />
              </span>
              <div className="main__contentBoxLeftButtons">
                <Link to="/contact" className="contactLink link">
                  Contact Me
                </Link>
                <Link to="/projects" className="projectsLink link">
                  My Projects
                </Link>
              </div>
            </div>
            <div className="main__contentBoxRight">
              <img src={Me} alt="Me" className="image" />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
