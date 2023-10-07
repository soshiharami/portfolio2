import React, { FC } from "react";
import style from "../styles/History.module.css";
import { history } from "../types/History";

interface props {
  history: history;
}

export const History: FC<props> = ({ history }) => {
  return (
    <div className={style.history}>
      <h4>{history.title}</h4>
      <p>{history.time.toString()}</p>
      <p>{history.about}</p>
    </div>
  );
};
