import React from "react";
import {Pick} from "../Interacts/Pick";
import {ColumnNumberBox, CommentNumberBox, DebateNumberBox, OpinionNumberBox, PostNumberBox} from "../NumBoxes";
import {InfoLinerRight} from "./CommonInfoLiner";
interface Props {
    debateId: number;
    isPicked: boolean;
    numPick: number;
    numOpinion: number;
    numComment: number;
}



export const DebateInfoLiner = ({
                                   debateId,
                                   isPicked,
                                   numPick,
                                   numOpinion,
                                   numComment,
                               }: Props): JSX.Element => {
    return (
        <InfoLinerRight>
            <Pick isPicked={isPicked} pickNum={numPick}/>
            <OpinionNumberBox num={numOpinion}/>
            <CommentNumberBox num={numComment}/>
        </InfoLinerRight>
    );
};
