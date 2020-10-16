import React from 'react';
import Post from './Post'
import '../styles/Posts.css';

const Posts = props => {
    const {profile, posts, changeCurrentPage, fetchPosts} = props

    if(posts && posts.length === 0){
        return (
            <div className='emptyPosts'> 
                <img src='https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif' alt='none found'/>
                <p>Unfortunately there are no posts</p>
        </div>)
    }

    return (
    <ul>
    {
        posts.slice(0).reverse().map(post => <Post
                key={post._id}
                {...{
                    profile,
                    post,
                    changeCurrentPage,
                    fetchPosts
                }}
            />)
    }
    </ul>
    )
}

export default Posts;