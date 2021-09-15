import React, { FC } from "react";
import { skill } from "../types/Skill";
import style from "../styles/Skill.module.css";

interface props {
  skill: skill;
}

export const Skill: FC<props> = ({ skill }) => {
  return (
    <div className={style.skill}>
      <div>{skill.name}</div>
    </div>
  );
};
