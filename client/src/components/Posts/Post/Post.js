import React from 'react';
import moment from 'moment';
const Post = ({post})=>{
    return(
        <div>
            <h1>{post}</h1>
            <h6>{moment(post.createdAt).fromNow()}</h6>
        </div>
    );
}

export default Post;