import React from 'react'
import '../styles/Sidebar.css';

const Sidebar = props =>{
    const {profile, currentPage, addProfile, changeCurrentPage, users} = props

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
        </>
        )
    }

    // if login, register, or compose page
    // show current page and cancel button
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
            <div className='profile-name' style={{
                background: userProfile ?
                userProfile.color : 'black'
                }}>
            { userProfile ? userProfile.name : '' }
            </div>

        <button onClick={()=>changeCurrentPage('compose')}> Compose </button>

        <button onClick={()=>{
            addProfile(null)
            localStorage.removeItem('storediD');
            changeCurrentPage('posts')
            console.log('Logged out.')
            }}>Log Out</button>
        </div>
        )
    }
}

export default Sidebar