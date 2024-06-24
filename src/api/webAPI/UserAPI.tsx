import {useApiRequest} from "../APIUtil";

export class UserData {
    userId: number;
    userName: string;
    userProfile?: string;
    numFollow: number;
    isFollowed: boolean = false;
    link1?: string;
    link2?: string;

    constructor(userId: number,
                    userName: string,
                    userProfile = "",
                    numFollow: number = -1,
                    isFollowed = false,
                    link1 = "",
                    link2 = ""
    ){
        this.userId = userId;
        this.userName = userName;
        this.userProfile = userProfile;
        this.numFollow = numFollow;
        this.isFollowed = isFollowed;
        this.link1 = link1;
        this.link2 = link2;
    }

    static fromJSON(json: any): UserData {
        let img = json.profileIMG == null ? "" : json.profileIMG;
        let link1 = ""
        let link2 = ""
        if (json.link_urls != null){
            if(json.link_urls.length > 0){
                link1 = json.link_urls[0];
            }
            if(json.link_urls.length > 1){
                link2 = json.link_urls[1];
            }
        }
        return new UserData(
            json.idx,
            json.nick,
            img,
            json.followee_cnt,
            json.follow_status,
            link1,
            link2
        );
    }
}

export const useUserAPI = (userId: number) => {
    return useApiRequest(`/user/user_info/get_user_info`, 'post', {
        data: { user_idx: userId},
        afterReceive: (response) => {
            //const json = JSON.stringify(response.data);
            const user = UserData.fromJSON(response.data.data)
            return user;
            //return UserData.fromJSON(response.data.data)
        }
    });
}
