import React from 'react'
import '../styles/Sidebar.css';

const Sidebar = props =>{

    // if posts page show login/register button
    if(!props.profile && props.currentPage==='posts'){
        return (
        <>
        <button className="login-btn" onClick={()=>props.changeCurrentPage('log in')}>Log In </button>
        <button className="register-btn" onClick={()=>props.changeCurrentPage('register')}>Register </button>
        </>
        )
    }

    // if login, register, or compose  page show current page and cancel button
    else if( 
        props.currentPage==='log in'||
        props.currentPage==='register'||
        props.currentPage==='compose'
        ){
        return( <div className="page-label">{props.currentPage}</div> )
    }

    // else person is logged in
    // so show the profile on the page
    // with logout and compose button
    else{
        return (
        <div className='profile'>
            <div className='profile-name' style={{
                background:props.profile ?
                props.profile.color : 'red'
                }}>
            {
                props.profile ?
                props.profile.name : ''
            }
            </div>

        <button onClick={()=>props.changeCurrentPage('compose')}> Compose </button>

        <button onClick={()=>{
            props.addProfile(null)
            props.changeCurrentPage('posts')
            }}>Log Out</button>
        </div>
        )
    }
}

export default Sidebar