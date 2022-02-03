import React, { useEffect } from "react";
import "./SkillsCard.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillsCard = ({ skill }) => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    console.log("in view", inView);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={
        inView ? "skillsCard__container inView" : "projectCard__container"
      }
    >
      <div className="skillsCard__header">
        <h3>{skill.name}</h3>
        <h6>{skill.subName}</h6>
        <div className="tags">
          <p>
            Tags:
            {skill.tags.map((tag) => (
              <a href={tag.url}>
                <span>#{tag.name}</span>
              </a>
            ))}
          </p>
        </div>
      </div>
      <div className="skillsCard__body">
        <p>Years of Experience: {skill.yearsUsed}</p>
        <p>Skill Level: {skill.skillLevel}/100</p>
        <div className="skillsCard__bodyProgressBar">
          <div
            className="progressBar"
            style={{ width: `${skill.skillLevel}%` }}
          ></div>
          <span>{skill.skillLevel}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
