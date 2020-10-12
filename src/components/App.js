import React, {useState, useEffect} from 'react'

import {getPostsRequest} from './Requests'
import LogIn from './LogIn'
import Sidebar from './Sidebar'
import Register from './Register'
import '../styles/App.css';
import Posts from './Posts'
import Compose from './Compose'
import Errors from './Errors'

function App() {

  const [currentPage, changeCurrentPage] = useState('posts');
  const [profile, addProfile] = useState();
  const [posts, addPost] = useState([]);
  const [errorMessage, addErrorMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const requestedPosts =  await getPostsRequest()
      addPost(requestedPosts)
    }
    fetchData();
  }, [currentPage])

  let currentComponent
  switch(currentPage) {
    case 'log in':
      currentComponent = <LogIn changeCurrentPage={changeCurrentPage} addProfile={addProfile} addErrorMessage={addErrorMessage} />
      break;
    case 'register':
      currentComponent = <Register addProfile={addProfile} changeCurrentPage={changeCurrentPage} addErrorMessage={addErrorMessage}/>
      break;
    case 'compose':
      currentComponent = <Compose profile={profile} changeCurrentPage={changeCurrentPage}/>
      break;
    default:
      currentComponent = <Posts profile={profile} posts={posts} changeCurrentPage={changeCurrentPage}/>
  }

  return (
    <div className="global-app">
      {errorMessage? <Errors errorMessage={errorMessage} addErrorMessage={addErrorMessage}/>:''}
      <div className='App'>
        <div className='sidebar'>
          <Sidebar profile={profile} currentPage={currentPage} changeCurrentPage={changeCurrentPage} addProfile={addProfile} addErrorMessage={addErrorMessage} />
        </div>
        <div className='container'>
          {currentComponent}
        </div>
      </div>
    </div>
  );
}

export default App;
