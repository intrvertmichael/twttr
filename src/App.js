import React, {useState, useEffect} from 'react'

import LogIn from './LogIn'
import {getPostsRequest} from './Requests'

import './App.css';

function App() {

  const [posts, addPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestedPosts =  await getPostsRequest()
      addPost(requestedPosts)
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <h1>twttr</h1>
      <ul>
      { posts? posts.map( post => {
        return (
        <li key={post._id}> 
          <h3>{post.name}</h3>
          <p>{post.payload}</p>
        </li>)
      }) : 'no posts yet' }
      </ul>
      <LogIn />
    </div>
  );
}

export default App;
