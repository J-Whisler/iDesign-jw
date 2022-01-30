import React from "react";
import "./AboutMe.scss";

import TopNav from "../../components/TopNav/TopNav";
import ParticleComponent from "../../components/Particles/ParticleComponent";
import PageTitle from "../../components/PageTitle/PageTitle";

const AboutMe = () => {
  return (
    <div className="aboutMe__container container">
      <TopNav />
      <ParticleComponent theme="theme5" />
      <PageTitle>
        <h2 className="aboutMe__Title">About Me</h2>
      </PageTitle>
    </div>
  );
};

export default AboutMe;
