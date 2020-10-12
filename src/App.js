import React, {useState, useEffect} from 'react'

import {getPostsRequest} from './Requests'
import LogIn from './LogIn'
import Profile from './Profile'

import './App.css';

function App() {

  const [posts, addPost] = useState();
  const [profile, addProfile] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const requestedPosts =  await getPostsRequest()
      addPost(requestedPosts)
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <LogIn addProfile={addProfile} />
      <Profile profile={profile} />
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
      
    </div>
  );
}

export default App;
