import React from "react";
import './Profile.css';

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://i.imgur.com/9gCgsEdh.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className='posts'>
                    <div className='item'>
                        post 1
                    </div>
                    <div className='item'>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
