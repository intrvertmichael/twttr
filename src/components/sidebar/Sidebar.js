import React, {useState} from 'react'
import '../../styles/Sidebar.css';
import Search from './Search'

const Sidebar = props =>{

    const {profile, currentPage, addProfile, changeCurrentPage, users, addErrorMessage, addPost, allPosts, server_GetPostsRequest} = props

    const searchField = <Search {...{
        server_GetPostsRequest,
        addErrorMessage,
        allPosts,
        addPost
    }}/>

    let userProfile = {}
    if(profile){
        userProfile = users.find(user=> user._id === profile._id)
    }

    // if not logged in and posts page
    // show login/register button
    if(!profile && currentPage==='posts'){
        return (
        <>
        <button className="login-btn" onClick={()=>changeCurrentPage('log in')}>Log In </button>
        <button className="register-btn" onClick={()=>changeCurrentPage('register')}>Register </button>
        {searchField}
        </>
        )
    }

    // if login, register, or compose
    // show current page label
    else if(
        currentPage==='log in'||
        currentPage==='register'||
        currentPage==='compose'
        ){
        return( <div className="page-label">{currentPage}</div> )
    }

    // else person is logged in
    // so show the profile on the page
    // with logout and compose button
    else{
        return (
        <div className='profile'>
            <div
                className='profile-name'
                onClick={()=>{
                    // setSearchText('')
                    server_GetPostsRequest()
                }}
                style={{
                background: userProfile ?
                    userProfile.color : 'black'
                }}>
            { userProfile ? userProfile.name : '' }
            </div>

        <button onClick={()=>changeCurrentPage('compose')}> Compose </button>

        <button onClick={()=>{
            addProfile(null)
            localStorage.removeItem('storediD');
            localStorage.removeItem('storedToken');
            changeCurrentPage('posts')
            console.log('Logged out.')
            }}> Log Out</button>

            {searchField}
        </div>
        )
    }
}


export default Sidebar