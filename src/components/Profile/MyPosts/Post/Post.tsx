import React from "react";
import s from './Post.module.css';

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://get.wallhere.com/photo/1680x1050-px-action-adventure-alien-aliens-Avatar-Disney-fantasy-fi-fighting-futuristic-sci-warrior-1635309.jpg"/>
            {props.message}
            <div>
                <span>likes: {props.likesCount}</span>
            </div>

        </div>
    )
}

export default Post
