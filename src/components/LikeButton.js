import React from 'react'
import { FaRegHeart } from "react-icons/fa"

const LikeButton = props => {
    const {profile, post, likeRequest} = props;

    // called when a post is liked
    const handleLikeClick = async e => {
        e.preventDefault();
        const res = await likeRequest({
            token:profile.token,
            _id:post._id
        })
        console.log(res);
        props.fetchPosts();
    }

    // if user is able to like, make it red
    let style = {};
    if(post && profile && post.authorId !== profile._id && !post.likes.includes(profile._id)){
        style = {color:'black', cursor:'pointer', opacity:1}
    }
    else if(post && profile && post.authorId !== profile._id && post.likes.includes(profile._id)){
        style = {color:'red', cursor:'pointer', opacity:1}
    }

    return (
        <button className="like" onClick={event=>{
            if(profile && (profile._id !== post.authorId) && !post.likes.includes(profile._id) ){
                handleLikeClick(event)
            }
        }} style={style}>
            <label>{post.likes.length}</label>
            <FaRegHeart className='heart'/>
        </button>
    )
}

export default LikeButton