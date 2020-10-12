import React, {useState, useEffect} from 'react'

import {getPostsRequest} from './Requests'
import LogIn from './LogIn'
import Profile from './Profile'
import Register from './Register'
import './App.css';
import Posts from './Posts'
import Compose from './Compose'

function App() {

  const [profile, addProfile] = useState();
  const [posts, addPost] = useState();

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
      <LogIn addProfile={addProfile} />
      <Register addProfile={addProfile}/>
      <Profile profile={profile} />
      <Compose profile={profile}/>
      <Posts posts={posts}/>
    </div>
  );
}

export default App;
