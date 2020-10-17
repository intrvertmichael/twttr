import React, {useState, useEffect} from 'react'

import {getPostsRequest, getUsersRequest} from './Requests'
import LogIn from './LogIn'
import Sidebar from './Sidebar'
import Register from './Register'
import '../styles/App.css';
import '../styles/MediaQueries.css';
import Posts from './Posts'
import Compose from './Compose'
import Errors from './Errors'

function App() {

  const [currentPage, changeCurrentPage] = useState('posts');
  const [profile, addProfile] = useState();
  const [posts, addPost] = useState([]);
  const [users, addUsers] = useState([]);
  const [errorMessage, addErrorMessage] = useState();

  const server_GetPostsRequest = async () => {
    const requestedPosts =  await getPostsRequest()
    if(typeof requestedPosts === 'string'){
      addErrorMessage('There was a connection error with the DB.')
      addPost([])
    } else {
      addPost(requestedPosts)
    }
  }

  const server_GetUsersRequest = async () => {
    const response =  await getUsersRequest()
    if(typeof response === 'string'){
      console(response)
    } else {
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
          addErrorMessage
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
