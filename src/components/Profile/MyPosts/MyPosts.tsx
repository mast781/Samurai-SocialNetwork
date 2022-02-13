import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 15}
    ]

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
                {postsData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)}
                {/*<Post message="Hi, how are you" likesCount={5}/>
                <Post message="It's my first post" likesCount={15}/>*/}
            </div>
        </div>
    )
}

export default MyPosts
