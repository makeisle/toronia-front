import React from "react";
import {CommonInteract} from "./Common";

interface Props {
    isPicked: boolean;
    pickNum: number;
    clickHandler?: ()=>void;
}

export const Pick = ({isPicked = false, pickNum, clickHandler = ()=>{} }: Props): JSX.Element => {

    return (
        <CommonInteract isInteracted={isPicked} count={pickNum} clickHandler={clickHandler}
                        onImg={"material-symbols-bookmark-on.svg"}
                        offImg={"material-symbols-bookmark-off.svg"}/>
    );
};

