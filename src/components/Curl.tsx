import React, {FC} from "react";
import Typist from "react-typist"
import styles from "../styles/Curl.module.css"

type props = {
    swichLoading: VoidFunction,
}

export const Curl: FC<props> = ({swichLoading}) => {
    return (
        <div className={styles.curl}>
            <Typist className={styles.type} cursor={{hideWhenDone: true, blink: true}} onTypingDone={swichLoading} >
                <span>{"curl https://portfolioapi.soshiharami.com/graphql"}</span>
                <Typist.Delay ms={1000} />
            </Typist>
        </div>
    )
}
