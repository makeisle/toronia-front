import {useApiRequest} from "../APIUtil";

export class ColumnPostData{
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

    constructor(postID: number,
                issueID: number,
                writerID: number,
                title: string,
                isLiked: boolean,
                isDisliked: boolean,
                numLike: number,
                numDislike: number,
                numView: number,
                numComment: number
    ) {
        this.postID = postID;
        this.issueID = issueID;
        this.writerID = writerID;
        this.title = title;
        this.isLiked = isLiked;
        this.isDisliked = isDisliked;
        this.numLike = numLike;
        this.numDislike = numDislike;
        this.numView = numView;
        this.numComment = numComment;
    }

    static fromJSON(json: any): ColumnPostData{
        return new ColumnPostData(
            json.postID,
            json.issueID,
            json.writerID,
            json.title,
            json.isLiked,
            json.isDisliked,
            json.numLike,
            json.numDislike,
            json.numView,
            json.numComment
        )
    }
}

export const usePostAPI = (postId: number) => {
    return useApiRequest(`/api/post/${postId}`, 'post', {
        afterReceive: (response) => {
            return ColumnPostData.fromJSON(response.data)
        }
    })
}

export const useColumnAPI = (columnId: number) => {
    return useApiRequest(`/api/column/${columnId}`, 'post', {
        afterReceive: (response) => {
            return ColumnPostData.fromJSON(response.data)
        }
    })
}
