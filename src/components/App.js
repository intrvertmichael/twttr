import React, {useState, useEffect} from 'react'

import {getPostsRequest, getUsersRequest} from './utilities/Requests'
import LogIn from './actions/LogIn'
import Sidebar from './sidebar/Sidebar'
import Register from './actions/Register'
import '../styles/App.css';
import '../styles/MediaQueries.css';
import Posts from './Posts'
import Compose from './actions/Compose'
import Errors from './utilities/Errors'

function App() {

  const [currentPage, changeCurrentPage] = useState('posts');
  const [profile, addProfile] = useState();
  const [posts, addPost] = useState([]);
  const [allPosts, setAllPost] = useState([]);
  const [users, addUsers] = useState([]);
  const [errorMessage, addErrorMessage] = useState();

  const server_GetPostsRequest = async () => {
    const requestedPosts =  await getPostsRequest()
    if(typeof requestedPosts === 'string'){
      addErrorMessage('There was a connection error with the DB.')
      addPost([])
    } else {
      addPost(requestedPosts)
      setAllPost(requestedPosts)
    }
  }

  const server_GetUsersRequest = async () => {
    const response =  await getUsersRequest()
    if(typeof response === 'string'){
      console(response)
    } else {
      const storediD = localStorage.getItem('storediD');
      const storedToken = localStorage.getItem('storedToken');

      if(storediD){
        const f = response.find(user=> user._id === storediD)
        addProfile({...f, token:storedToken})
      }

      addUsers(response)
    }
  }

  useEffect(() => {
    server_GetUsersRequest()
    server_GetPostsRequest()
  }, [currentPage])


  // depending on currentPage show adequate component;
  let currentComponent
  switch(currentPage) {
    case 'log in':
      currentComponent = <LogIn {...{
                              profile,
                              addProfile,
                              changeCurrentPage,
                              addErrorMessage
                            }}
                          />
      break;

    case 'register':
      currentComponent = <Register {...{
                              addProfile,
                              changeCurrentPage,
                              addErrorMessage
                            }}
                          />
      break;

    case 'compose':
      currentComponent = <Compose {...{
                              profile,
                              changeCurrentPage,
                              addErrorMessage
                            }}
                          />
      break;

    default:
      currentComponent = <Posts {...{
                              profile,
                              posts,
                              addPost,
                              users,
                              changeCurrentPage,
                              server_GetPostsRequest
                            }}
                          />
  }


  return (
  <div className="global-app">

    { // if there's an error message show Errors component
    errorMessage?
      <Errors {...{errorMessage, addErrorMessage}} /> : ''
    }

    <div className='App'>
      <div className='sidebar'>
        <Sidebar {...{
          users,
          profile,
          addProfile,
          currentPage,
          changeCurrentPage,
          addErrorMessage,
          addPost,
          allPosts,
          server_GetPostsRequest
          }}
        />
      </div>

      <div className='container'>
        {currentComponent}
      </div>
    </div>
  </div>
  );
}

export default App;
