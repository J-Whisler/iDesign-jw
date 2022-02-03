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

const MyProjects = () => {
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
      <div className="myProjects__contentBox">
        {ProjectData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
