import React from 'react';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import { useEffect } from 'react';
import { getPosts } from './actions/posts.js';

function App() {
  const memories = "Records your feelings by writting comments!";
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <div>
      <h1>{memories}</h1>
      <Posts/>
      <Form/>
    </div>
  );
}

export default App;
