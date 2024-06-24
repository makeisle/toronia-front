import React from "react";
import {InfoLinerRight} from "./CommonInfoLiner";
import {Pick} from "../Interacts/Pick";
import {ColumnNumberBox, CommentNumberBox, DebateNumberBox, PostNumberBox, ViewCountBox} from "../NumBoxes";
import {Like} from "../Interacts/Like";
import {Dislike} from "../Interacts/Dislike";
interface Props {
    PostID: number;
    isLiked: boolean;
    isDisliked: boolean
    numLike: number;
    numDislike: number;
    numView: number;
    numComment: number;
}

export const PostInfoLiner = ({
                                  PostID,
                                  isLiked,
                                  isDisliked,
                                  numLike,
                                  numDislike,
                                  numView,
                                  numComment,
                              }: Props): JSX.Element => {
    return (
        <InfoLinerRight>
            <Like isLiked={isLiked} likeNum={numLike}/>
            <Dislike isDisliked={isDisliked} dislikeNum={numDislike}/>
            <ViewCountBox num={numView}/>
            <CommentNumberBox num={numComment}/>
        </InfoLinerRight>
    );
};
