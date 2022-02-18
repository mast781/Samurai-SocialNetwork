import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";

type StateProfilePropsType = {
    state: {
        posts: Array<PostPropsType>
    }
}

const Profile = (props:StateProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}
export default Profile
