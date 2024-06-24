import React from "react";
import {CommonInteract} from "./Common";

interface Props {
    isFollowed: boolean;
    followNum: number;
    clickHandler?: ()=>void;
}

export const Follower = ({isFollowed = false, followNum, clickHandler = ()=>{} }: Props): JSX.Element => {

    return (
        <CommonInteract isInteracted={isFollowed} count={followNum} clickHandler={clickHandler}
                        onImg={"user-follow-on.svg"}
                        offImg={"user-follow-off.svg"}/>
    );
};

