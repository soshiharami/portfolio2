import React, { FC } from "react";
import style from "../styles/Contacts.module.css";
import { contact } from "../types/Contact";
import { Contact } from "../components/Contact";

interface props {
  contacts: [contact];
}

export const Contacts: FC<props> = ({ contacts }) => {
  return (
    <div className={style.main}>
      <h2>Contacts</h2>
      <div className={style.contacts}>
        {contacts.map((contact, index) => (
          <Contact contact={contact} key={index} />
        ))}
      </div>
    </div>
  );
};
