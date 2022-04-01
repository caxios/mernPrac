import React from 'react';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import { useEffect } from 'react';
import { getPosts } from './actions/posts.js';

function App() {
  const memories = "https://i.ytimg.com/vi/UsESdZ9qpR0/maxresdefault.jpg";
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <div>
      <img src={memories} />
      <Posts/>
      <Form/>
    </div>
  );
}

export default App;
