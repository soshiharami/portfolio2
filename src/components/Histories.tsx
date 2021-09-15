import React, { FC } from "react";
import style from "../styles/Histories.module.css";
import { History } from "./History";
import { history } from "../types/History";

interface props {
  histories: [history];
}

export const Histories: FC<props> = ({ histories }) => {
  return (
    <div className={style.main}>
      <h2>Contacts</h2>
      <div className={style.histories}>
        {histories.map((history, index) => (
          <History history={history} key={index} />
        ))}
      </div>
    </div>
  );
};
