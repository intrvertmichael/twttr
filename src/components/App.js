import React, {useState, useEffect} from 'react'

import {getPostsRequest} from './Requests'
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
  const [errorMessage, addErrorMessage] = useState();

  const fetchPosts = async () => {
    const requestedPosts =  await getPostsRequest()
    if(typeof requestedPosts === 'string'){
      addErrorMessage('There was a connection error with the DB.')
      addPost([])
    } else {
      addPost(requestedPosts)
    }
  }

  useEffect(() => {
    fetchPosts();
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
                              changeCurrentPage
                            }}
                          />
      break;

    default:
      currentComponent = <Posts {...{
                              profile,
                              posts,
                              changeCurrentPage,
                              fetchPosts
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
