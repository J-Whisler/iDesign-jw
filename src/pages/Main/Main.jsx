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
import { motion } from "framer-motion";

const Main = () => {
  const [centerIsClicked, setCenterIsClicked] = useState(false);
  console.log(centerIsClicked);

  const MainSpinnerDesktopAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 6.5,
      },
    },
  };
  const MainSpinnerMobileAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 2.2,
      },
    },
  };

  const MainSpinnerCodeDesktopAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 6.7,
      },
    },
  };

  const MainSpinnerCodeMobileAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 2.4,
      },
    },
  };

  const MainContentBoxHeightAnimation = {
    hidden: {
      height: 0,
    },
    show: {
      height: "39vh",
      transition: {
        type: "spring",
        delay: 1.3,
      },
    },
  };

  const MainContentH3Animation = {
    hidden: {
      opacity: 0,
      y: "-2vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 3,
      },
    },
  };

  const MainContentPAnimation = {
    hidden: {
      opacity: 0,
      x: "2vw",
    },
    show: {
      opacity: 0.9,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 3.4,
      },
    },
  };

  const MainContentSpanAnimation = {
    hidden: {
      opacity: 0,
      y: "2vh",
    },
    show: {
      opacity: 0.3,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 3.8,
      },
    },
  };

  const MainContentButtonsAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 50,
        delay: 4.2,
      },
    },
  };

  const MainContentRightAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 4.6,
      },
    },
  };

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
        <motion.div
          className="main__contentCenterSpinner"
          variants={
            window.innerWidth > 820
              ? MainSpinnerDesktopAnimation
              : MainSpinnerMobileAnimation
          }
          initial="hidden"
          animate="show"
        >
          <FontAwesomeIcon icon={faCode} className="icon" />
        </motion.div>
        <motion.div
          className="main__contentCenterSpinnerText"
          variants={
            window.innerWidth > 820
              ? MainSpinnerCodeDesktopAnimation
              : MainSpinnerCodeMobileAnimation
          }
          initial="hidden"
          animate="show"
        >
          Click to see {centerIsClicked ? "less" : "more"}...
        </motion.div>
      </div>
      {centerIsClicked ? (
        <>
          <motion.div
            className="main__contentBox"
            variants={MainContentBoxHeightAnimation}
            initial="hidden"
            animate="show"
          >
            <motion.div className="main__contentBoxLeft">
              <motion.h3
                variants={MainContentH3Animation}
                initial="hidden"
                animate="show"
              >
                Hi! I'm Jacob!
              </motion.h3>
              <motion.p
                variants={MainContentPAnimation}
                initial="hidden"
                animate="show"
              >
                I design and develop awesome websites just like this one!
              </motion.p>
              <motion.span
                variants={MainContentSpanAnimation}
                initial="hidden"
                animate="show"
              >
                Cleveland, OH
                <FontAwesomeIcon icon={faMapPin} className="icon" />
              </motion.span>
              <motion.div
                className="main__contentBoxLeftButtons"
                variants={MainContentButtonsAnimation}
                initial="hidden"
                animate="show"
              >
                <Link to="/contact" className="contactLink link">
                  Contact Me
                </Link>
                <Link to="/projects" className="projectsLink link">
                  My Projects
                </Link>
              </motion.div>
            </motion.div>
            <div className="main__contentBoxRight">
              <motion.img
                variants={MainContentRightAnimation}
                initial="hidden"
                animate="show"
                src={Me}
                alt="Me"
                className="image"
              />
            </div>
          </motion.div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
