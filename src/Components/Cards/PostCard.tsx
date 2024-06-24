import React from "react";
import styled from 'styled-components'
import {PostInfoLiner} from "../InfoLiner/PostInfoLiner";
import {AsyncUserCard, UserCardTypeEnum} from "./UserCard";
import {useColumnPostAPI} from "../../api/webAPI/ColumnPostAPI";
import {MoveToIssue} from "../../Util/MoveTo";
interface Props {
    postID: number;
    issueID: number;
    writerID: number;
    title: string;
    isLiked: boolean
    isDisliked: boolean
    numLike: number;
    numDislike: number
    numView: number;
    numComment: number;
}

const StyledPostCard = styled.div`
        align-items: flex-start;
        border: 1px solid #e3e3e3;
        border-radius: 10px;
        box-shadow: 2px 2px 4px #00000040;
        display: inline-flex;
        flex-direction: column;
        gap: 15px;
        overflow: hidden;
        padding: 10px;
        position: relative;
    `

const StyledTitle = styled.div`
        position: relative;
        ${(props)=>props.theme.fonts.head}
    `

export const ColumnPostCard = ({
                                   postID,
                                   issueID,
                                   writerID,
                                   title,
                                   isLiked,
                                   isDisliked,
                                   numLike,
                                   numDislike,
                                   numView,
                                   numComment,}: Props): JSX.Element => {

    return (
        <StyledPostCard onClick={()=>MoveToIssue(issueID, "post", postID)}>
            <AsyncUserCard userId={writerID} cardType={UserCardTypeEnum.DEFAULT}/>
            <StyledTitle>{title}</StyledTitle>
            <PostInfoLiner PostID={postID}
                           isLiked={isLiked}
                           numLike={numLike}
                           isDisliked={isDisliked}
                           numDislike={numDislike}
                           numView={numView}
                           numComment={numComment}
            />
        </StyledPostCard>
    );
};

export const AsyncColumnPostCard = ({postID}: {postID: number}) => {

    const {data, loading} = useColumnPostAPI(postID)

    if (loading){
        return <div>Loading...</div>;
    }
    return (
        <ColumnPostCard postID={postID}
                        issueID={data.issueID}
                        isLiked={data.isLiked}
                        isDisliked={data.isDisliked}
                        writerID={data.writerID}
                        numDislike={data.numDislike}
                        numComment={data.numComment}
                        numLike={data.numLike}
                        numView={data.numView}
                        title={data.title}
        />
    )
}
