import React, {FC} from "react";
import ReactJson from "react-json-view"

interface props {
    json: Object;
};

export const Json: FC<props> = ({json}) => {

    return (
        <ReactJson src={json} />
    )
}
