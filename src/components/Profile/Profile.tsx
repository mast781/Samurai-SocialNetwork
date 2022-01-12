import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://i.imgur.com/9gCgsEdh.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile
