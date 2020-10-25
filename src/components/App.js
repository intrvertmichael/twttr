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

import {connect} from 'react-redux'
import {addPostsAction, addUsersAction} from '../reduxStore/actions/mongoDb'
import {setProfileAction} from '../reduxStore/actions/profile'
import {setErrorMessageAction} from '../reduxStore/actions/page'

const App = props => {
  const {setProfile, reduXcurrentPage, reduXaddPosts, reduXaddUsers, setErrorMessage} = props

  const server_GetPostsRequest = async () => {
    const requestedPosts =  await getPostsRequest()
    if(typeof requestedPosts === 'string'){
      setErrorMessage('There was a connection error with the DB.')
      reduXaddPosts([])
    } else {
      reduXaddPosts(requestedPosts)
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
        setProfile({...f, token:storedToken})
      }

      reduXaddUsers(response)
    }
  }

  useEffect(() => {
    server_GetUsersRequest()
    server_GetPostsRequest()
  }, [reduXcurrentPage])


  // depending on currentPage show adequate component;
  let currentComponent
  switch(reduXcurrentPage) {
    case 'log in':
      currentComponent = <LogIn />
      break;

    case 'register':
      currentComponent = <Register />
      break;

    case 'compose':
      currentComponent = <Compose />
      break;

    default:
      currentComponent = <Posts />
  }


  return (
  <div className="global-app">

    <Errors />

    <div className='App'>
      <div className='sidebar'>
        <Sidebar {...{
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

const mapStateToProps = state => {
  console.log(state)

  return {
    reduXprofile: state.profile,
    allUsers: state.mongoDb.allUsers,
    reduXcurrentPage: state.page.currentPage,
    reduXerrorMessage: state.page.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reduXaddPosts: posts => dispatch(addPostsAction(posts)),
    reduXaddUsers: users => dispatch(addUsersAction(users)),
    setProfile: profile => dispatch(setProfileAction(profile)),
    setErrorMessage: message => dispatch(setErrorMessageAction(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
