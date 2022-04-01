import React from 'react';
import {useSelector} from 'react-redux';
import Post from './Post/Post.js';

const Posts = ()=>{
    const posts = useSelector((state)=>state.posts);
    console.log(posts);
    return(
        <div>
            {posts.map(post=><div key={post.id}><Post post={post['message']} /></div>)}
        </div>
    );
}

export default Posts;