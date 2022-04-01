import React from 'react';
import {useState} from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import {createPost} from '../../actions/posts.js';

const Form = ()=>{
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(createPost(postData));
    }
    const clear = ()=>{

    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h6>memory</h6>
                <textarea id="creator" name="creator" row={1} cols={30} value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}></textarea>
                <textarea id="title" name="title" row={1} cols={50} value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}></textarea>
                <textarea id="message" name="message" row={5} cols={100} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>
                <textarea id="tags" name="tags" row={1} cols={30} value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}></textarea>
                <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <button type='submit'>Submit</button>
                <button onClick={clear}>Clear</button>
            </form>
        </div>
    );
}

export default Form;