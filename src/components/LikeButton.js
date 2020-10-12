import React from 'react'
import { FaRegHeart } from "react-icons/fa"

const LikeButton = props => {
    const {profile, post, likeRequest} = props;

    let counter = 0;
    const handleLikeClick = async e => {
        e.preventDefault();
        const res = await likeRequest({token:profile.token , _id:post._id})
        console.log(res);
        counter++
        props.changeCurrentPage(`update ${counter}`)
    }

    let style;

    if(post && profile && post.authorId !== profile._id){
        style = {color:'red', cursor:'pointer', opacity:1}
    }

    if(post&& profile&& post.likes.includes(profile._id)){
        style = {}
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