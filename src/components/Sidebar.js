import React, {useState} from 'react'
import '../styles/Sidebar.css';
import {searchRequest} from './Requests'

const Sidebar = props =>{
    const [searchText, setSearchText] = useState('');

    const {profile, currentPage, addProfile, changeCurrentPage, users, addErrorMessage, addPost, allPosts, server_GetPostsRequest} = props

    const handleSearch = async e =>{
        e.preventDefault()

        if(searchText === ''){
            server_GetPostsRequest()
        } else {

            const response = await searchRequest({payload:searchText.toLowerCase()})
            if(typeof response === 'string'){
                console.log(response)
                addErrorMessage(response)
            } else {
                addErrorMessage('')
                let allHashtags = response.flatMap(hashtags => {
                    return hashtags.flatMap(post =>{
                        return post.postsWith
                    })
                })

                const final = allPosts.filter(post => {
                    for(let i=0; i<allHashtags.length; i++){
                        if (allHashtags[i] === post._id){
                            return post
                        }
                    }
                })

                addPost(final)
            }
        }
    }
    const searchField = <input 
    type='text'
    name='search'
    placeholder="Search for Hashtag here"
    onChange = {text =>{
        setSearchText(text.target.value)

    }}
    value={searchText}
    />

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
        <form onSubmit={handleSearch}>
            {searchField}
        </form>
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
            <div 
                className='profile-name' 
                onClick={()=>{
                    setSearchText('')
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
            }}>Log Out</button>

        <form onSubmit={handleSearch}>
            {searchField}
        </form>

        </div>
        )
    }
}


export default Sidebar