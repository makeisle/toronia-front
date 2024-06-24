import React from "react";
import {Pick} from "../Interacts/Pick";
import {ColumnNumberBox, DebateNumberBox, PostNumberBox} from "../NumBoxes";
import {InfoLinerRight} from "./CommonInfoLiner";
interface Props {
    issueID: number;
    isPicked: boolean;
    numPick: number;
    numPost: number;
    numDebate: number;
    numColumn: number;
}



export const IssueInfoLiner = ({
                                   issueID,
                                   isPicked,
                                   numPick,
                                   numPost,
                                   numDebate,
                                   numColumn,
                               }: Props): JSX.Element => {
    return (
        <InfoLinerRight>
            <Pick isPicked={isPicked} pickNum={numPick}/>
            <PostNumberBox num={numPost}/>
            <DebateNumberBox num={numDebate}/>
            <ColumnNumberBox num={numColumn}/>
        </InfoLinerRight>
    );
};
