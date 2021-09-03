import React, {FC} from "react";
import style from "../styles/Contact.module.css"
import {contact} from "../types/Contact";

interface props {
    contact: contact
}

export const Contact: FC<props> = ({contact}) => {
    return (
        <a href={contact.url} className={style.contact}>
            {contact.name}
        </a>
    )
}
