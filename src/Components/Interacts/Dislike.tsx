import React from "react";
import {CommonInteract} from "./Common";

interface Props {
    isDisliked: boolean;
    dislikeNum: number;
    clickHandler?: ()=>void;
}

export const Dislike = ({isDisliked = false, dislikeNum, clickHandler = ()=>{} }: Props): JSX.Element => {

    return (
        <CommonInteract isInteracted={isDisliked} count={dislikeNum} clickHandler={clickHandler}
                        onImg={"dislike-on.svg"}
                        offImg={"dislike-off.svg"}/>
    );
};

