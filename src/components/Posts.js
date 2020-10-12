import React from 'react';
import Post from './Post'
import '../styles/Posts.css';

const Posts = props => {
    const {profile} = props

    return (
    <ul>
    {
        props.posts?
        props.posts.slice(0).reverse().map(post => <Post key={post._id} profile={profile} post={post} changeCurrentPage={props.changeCurrentPage}/>) :
        'no posts yet'
    }
    </ul>
    )
}

export default Posts;