import React from 'react'
import { FaRegHeart } from "react-icons/fa"
import {likeRequest, dislikeRequest} from './Requests'

const LikeButton = props => {
    const {profile, post, server_GetPostsRequest} = props;

    const server_AddLike = async (e) => {
        e.preventDefault()

        const response = await likeRequest({
            token:profile.token,
            _id:post._id
        })

        if(response !== 'OK'){
            console.log(response)
        }
        else {
            console.log('Like was added.')
            server_GetPostsRequest()
        }
    }

    const server_RemoveLike = async (e) => {
        e.preventDefault()

        const response = await dislikeRequest({
            token:profile.token,
            _id:post._id
        })

        if(response !== 'OK'){
            console.log(response)
        }
        else {
            console.log('Like was removed.')
            server_GetPostsRequest()
        }
    }

    // if user is able to like, make it red
    let style = {};

    const userDidntLikedBefore = post && profile && post.authorId !== profile._id && !post.likes.includes(profile._id)

    const userLikedBefore = post && profile && post.authorId !== profile._id && post.likes.includes(profile._id)

    if(userDidntLikedBefore){
        style = {color:'black', cursor:'pointer', opacity:1}
    }

    else if(userLikedBefore){
        style = {color:'red', cursor:'pointer', opacity:1}
    }

    return (
        <button className="like" onClick={event=>{
            if(userDidntLikedBefore){
                server_AddLike(event)
            }
            else if(userLikedBefore){
                server_RemoveLike(event)
            }
        }} style={style}>
            <label>{post.likes.length}</label>
            <FaRegHeart className='heart'/>
        </button>
    )
}

export default LikeButton