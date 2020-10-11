import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [posts, addPost] = useState();
  const getPosts = async () => {
    const data = await axios.get('http://localhost:3001/api/posts')
    console.log(data.data);
    addPost(data.data.map(post=>{
      return <li key={post._id}>{post.payload}, {post.likes.length}</li>
    }))
  }

  useEffect(()=> {getPosts()}, [])

  return (
    <div className="App">
      <p>hello</p>
      {posts?posts:'no posts yet'}
    </div>
  );
}

export default App;
