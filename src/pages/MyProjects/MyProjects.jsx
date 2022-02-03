import React from "react";
import "./MyProjects.scss";
import ParticleComponent from "../../components/Particles/ParticleComponent";
import TopNav from "../../components/TopNav/TopNav";
import LeftLinkBar from "../../components/LeftLinkBar/LeftLinkBar";
import BottomLinkBar from "../../components/BottomLinkBar/BottomLinkBar";
import DesktopSocials from "../../components/DesktopSocials/DesktopSocials";
import PageTitle from "../../components/PageTitle/PageTitle";

import { ProjectData } from "../../data/projectData";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { motion } from "framer-motion";

const MyProjects = () => {
  const ContentBoxAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      width: 0,
    },
    show: {
      opacity: 1,
      height: "50vh",
      width: "55vw",
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 4.5,
      },
    },
  };

  const ContentBoxMobileAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      width: 0,
    },
    show: {
      opacity: 1,
      height: "65vh",
      width: "85vw",
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 2,
      },
    },
  };
  const ContentBoxInnerAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        duration: 1,
        delay: 5.5,
      },
    },
  };

  const ContentBoxInnerMobileAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        duration: 1,
        delay: 3,
      },
    },
  };
  return (
    <div className="myProjects__container container">
      <ParticleComponent theme="theme2" />
      <TopNav />
      {window.innerWidth > 820 && <LeftLinkBar />}
      {window.innerWidth > 820 && <BottomLinkBar />}
      {window.innerWidth > 820 && <DesktopSocials />}
      <PageTitle>
        <h2 className="myProjects__Title">Projects</h2>
      </PageTitle>
      <motion.div
        className="myProjects__contentBox"
        variants={
          window.innerWidth > 820
            ? ContentBoxAnimation
            : ContentBoxMobileAnimation
        }
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="content"
          variants={
            window.innerWidth > 820
              ? ContentBoxInnerAnimation
              : ContentBoxInnerMobileAnimation
          }
          initial="hidden"
          animate="show"
        >
          {ProjectData.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MyProjects;
