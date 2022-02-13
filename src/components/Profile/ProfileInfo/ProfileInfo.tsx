import React from "react";
import s from './ProfileInfo.module.css';

type ProfileInfoPropsType = {}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img src="https://i.imgur.com/9gCgsEdh.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo