import {InfoLinerRight} from "./CommonInfoLiner";
import {Like} from "../Interacts/Like";
import {Dislike} from "../Interacts/Dislike";
import {TextBox} from "../TextBox";
import {getTextAssets} from "../Texts/TextAssets";

interface Props{
    commentType: number;
    commentId: number;
    numLike: number;
    numDislike: number;
    isLiked: boolean;
    isDisliked: boolean;
    isOwner: boolean;
}

export const CommentInfoLiner = ({
    commentType,
    commentId,
    numLike,
    numDislike,
    isLiked,
    isDisliked,
    isOwner
}: Props): JSX.Element => {
    return (
        <InfoLinerRight>
            <Like isLiked={isLiked} likeNum={numLike}/>
            <Dislike isDisliked={isDisliked} dislikeNum={numDislike}/>
            {isOwner&&<TextBox textContent={getTextAssets('update')}/>}
            {isOwner&&<TextBox textContent={getTextAssets('delete')}/>}
        </InfoLinerRight>
    )
}
