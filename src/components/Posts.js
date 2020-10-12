import React from 'react';
import Post from './Post'
import '../styles/Posts.css';

const Posts = props => {
    const {profile} = props

    if(props.posts&&props.posts.length===0){
        return (
            <div className='emptyPosts'> 
                <img src='https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif' alt='none found'/>
                <p>Unfortunately there are no posts</p>
        </div>)
    }

    return (
    <ul>
    {
        props.posts.slice(0).reverse().map(post => <Post key={post._id} profile={profile} post={post} changeCurrentPage={props.changeCurrentPage}/>)
    }
    </ul>
    )
}

export default Posts;