import React from "react";
import "./ParticleComponent.scss";

import Particles from "react-tsparticles";

import theme1 from "../../config/theme-1.json";
import theme2 from "../../config/theme-2.json";
import theme3 from "../../config/theme-3.json";
import theme4 from "../../config/theme-4.json";
import theme5 from "../../config/theme-5.json";

const ParticleComponent = (props) => {
  const getConfig = () => {
    if (props.theme === "theme1") {
      return theme1;
    } else if (props.theme === "theme2") {
      return theme2;
    } else if (props.theme === "theme3") {
      return theme3;
    } else if (props.theme === "theme4") {
      return theme4;
    } else return theme5;
  };
  return (
    <div className="particles__container">
      <Particles
        style={{ position: "absolute", top: 0 }}
        params={getConfig()}
      />
    </div>
  );
};

export default ParticleComponent;
