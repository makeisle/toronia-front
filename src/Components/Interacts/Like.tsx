import React from "react";
import {CommonInteract} from "./Common";

interface Props {
    isLiked: boolean;
    likeNum: number;
    clickHandler?: ()=>void;
}

export const Like = ({isLiked = false, likeNum, clickHandler = ()=>{} }: Props): JSX.Element => {

    return (
        <CommonInteract isInteracted={isLiked} count={likeNum} clickHandler={clickHandler}
                        onImg={"like-on.svg"}
                        offImg={"like-off.svg"}/>
    );
};

