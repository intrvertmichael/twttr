import React from 'react'
import '../styles/Sidebar.css';

const Sidebar = props =>{

    // if posts page show login/register button
    if(!props.profile && props.currentPage==='posts'){
        return <button className="login-btn" onClick={()=>props.changeCurrentPage('log in')}>Log In / Register</button>
    }

    // if login or register page show current page and cancel button
    else if(!props.profile && (props.currentPage==='log in'||props.currentPage==='register')){
        return(
            <>
                <div className="page-label">{props.currentPage}</div>
                <button onClick={()=>{
                    props.changeCurrentPage('posts')
                    props.addErrorMessage('')
                }}> Cancel </button>
            </>)
    }

    // if compose page show cancel button
    else if(props.profile && props.currentPage==='compose'){
        return(
        <button 
            onClick={()=>{
            props.changeCurrentPage('posts')
            props.addErrorMessage('')
        }}> Cancel </button>)
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