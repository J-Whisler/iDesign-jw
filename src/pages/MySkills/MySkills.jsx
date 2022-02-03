import React from "react";
import ParticleComponent from "../../components/Particles/ParticleComponent";
import TopNav from "../../components/TopNav/TopNav";
import "./MySkills.scss";
import LeftLinkBar from "../../components/LeftLinkBar/LeftLinkBar";
import BottomLinkBar from "../../components/BottomLinkBar/BottomLinkBar";
import DesktopSocials from "../../components/DesktopSocials/DesktopSocials";
import PageTitle from "../../components/PageTitle/PageTitle";

import { SkillsData } from "../../data/skillsData";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import { motion } from "framer-motion";
const MySkills = () => {
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
    <div className="mySkills__container container">
      <ParticleComponent theme="theme5" />
      <TopNav />
      {window.innerWidth > 820 && <LeftLinkBar />}
      {window.innerWidth > 820 && <BottomLinkBar />}
      {window.innerWidth > 820 && <DesktopSocials />}
      <PageTitle>
        <h2 className="mySkills__Title">Skills</h2>
      </PageTitle>
      <motion.div
        className="mySkills__contentBox"
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
          {SkillsData.map((skill) => (
            <SkillsCard skill={skill} id={skill.id} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MySkills;

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
