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

// import React from "react";
// import "./AboutMe.scss";

// import TopNav from "../../components/TopNav/TopNav";
// import ParticleComponent from "../../components/Particles/ParticleComponent";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import LeftLinkBar from "../../components/LeftLinkBar/LeftLinkBar";
// import BottomLinkBar from "../../components/BottomLinkBar/BottomLinkBar";
// import DesktopSocials from "../../components/DesktopSocials/DesktopSocials";

// import { Link } from "react-router-dom";

// const AboutMe = () => {
//   return (
//     <div className="aboutMe__container container">
//       <ParticleComponent theme="theme5" />
//       <TopNav />
//       {window.innerWidth > 820 && <LeftLinkBar />}
//       {window.innerWidth > 820 && <BottomLinkBar />}
//       {window.innerWidth > 820 && <DesktopSocials />}
//       <PageTitle>
//         <h2 className="aboutMe__Title">About Me</h2>
//       </PageTitle>
//       <div className="aboutMe__contentBox">
//         <div className="aboutMe__conentBoxText">
//           <div className="aboutMe__paragraph">
//             I am a Front-End Web Developer currently living in Cleveland, Ohio.
//             I love to create awesome websites just like this one!
//           </div>
//           <div className="aboutMe__paragraph">
//             I started learning web development through a 6 month coding program
//             at Case Western Reserve University in Cleveland and have been
//             expanding my knowledge and skills since the end of the program.
//           </div>
//           <div className="aboutMe__paragraph">
//             {" "}
//             If you would like to see more of the projects that I have created
//             click{" "}
//             <Link to="/projects" className="p-link">
//               here
//             </Link>
//             , or if you would like to contact me about designing and creating a
//             website for you click{" "}
//             <Link to="/contact" className="p-link">
//               here
//             </Link>
//             !
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
