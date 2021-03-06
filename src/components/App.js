import React, {useEffect} from 'react'

import LogIn from './actions/LogIn'
import Sidebar from './sidebar/Sidebar'
import Register from './actions/Register'
import SinglePage from './singlePost/SinglePage'

import '../styles/App.css';
import '../styles/MediaQueries.css';

import Posts from './Posts'
// import Compose from './actions/Compose'
import HighlightedCompose from './HighlightedCompose/HC'
import Errors from './utilities/Errors'

import {connect} from 'react-redux'
import {updateAllPostsAction, updateAllUsersAction} from '../reduxStore/actions/mongoDb'
import {setProfileAction} from '../reduxStore/actions/profile'
import {setErrorMessageAction} from '../reduxStore/actions/page'

const App = props => {
  const {reduXcurrentPage, updateAllPosts, updateAllUsers} = props

  useEffect(() => {
    updateAllUsers()
    updateAllPosts()
  }, [reduXcurrentPage, updateAllPosts, updateAllUsers])


  // depending on currentPage show adequate component;
  let currentComponent
  switch(reduXcurrentPage) {
    case 'log-in':
      currentComponent = <LogIn />
      break;

    case 'register':
      currentComponent = <Register />
      break;

    case 'compose':
      // currentComponent = <Compose />
      currentComponent = <HighlightedCompose />
      break;

    case 'single-page':
      currentComponent = <SinglePage />
      break;

    default:
      currentComponent = <Posts />
  }


  return (
  <div className="global-app">

    <Errors />

    <div className='App'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='container'>
        {currentComponent}
      </div>
    </div>
  </div>
  );
}

const mapStateToProps = state => {
  // console.log(state)

  return {
    reduXprofile: state.profile,
    allUsers: state.mongoDb.allUsers,
    reduXcurrentPage: state.page.currentPage,
    reduXerrorMessage: state.page.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setProfile: profile => dispatch(setProfileAction(profile)),
    setErrorMessage: message => dispatch(setErrorMessageAction(message)),
    updateAllPosts: () => dispatch(updateAllPostsAction()),
    updateAllUsers: () => dispatch(updateAllUsersAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
