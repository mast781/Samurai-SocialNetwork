import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 15}
    ]

    let postsElements = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message="Hi, how are you" likesCount={5}/>
                <Post message="It's my first post" likesCount={15}/>*/}
            </div>
        </div>
    )
}

export default MyPosts
