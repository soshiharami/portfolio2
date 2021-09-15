import React, { FC } from "react";
import { skill } from "../types/Skill";
import style from "../styles/Skills.module.css";
import { Skill } from "../components/Skill";

interface props {
  skills: [skill];
}

export const Skills: FC<props> = ({ skills }) => {
  return (
    <div className={style.main}>
      <h2>Skills</h2>

      <h3>Front End</h3>
      <div className={style.skills}>
        {skills
          .filter((skill) => skill.types.id === 1)
          .map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
      </div>
      <h3>Back End</h3>
      <div className={style.skills}>
        {skills
          .filter((skill) => skill.types.id === 2)
          .map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
      </div>
      <h3>OtherPrograming</h3>
      <div className={style.skills}>
        {skills
          .filter((skill) => skill.types.id === 3)
          .map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
      </div>
      <h3>OS</h3>
      <div className={style.skills}>
        {skills
          .filter((skill) => skill.types.id === 4)
          .map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
      </div>
      <h3>Other</h3>
      <div className={style.skills}>
        {skills
          .filter((skill) => skill.types.id === 5)
          .map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
      </div>
    </div>
  );
};
