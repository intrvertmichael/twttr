import React from 'react'
import LikeButton from './LikeButton';
import {deleteRequest} from './Requests'
import {likeRequest} from './Requests'

const Post = props => {
    const {post, profile, changeCurrentPage, fetchPosts} = props;

    // handle delete button pressed
    const handleDeleteClick = async e => {
        e.preventDefault();
        const res = await deleteRequest({
            token:profile.token,
            _id:post._id
        })
        console.log(res);
        fetchPosts();
    }

    let deleteButton
    if(profile && profile._id === post.authorId){
        deleteButton = <button
        className="delete"
        onClick={handleDeleteClick}
        > Delete </button>
    }

    // creating the formatted date for post
    const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const d = new Date(post.date)
    const date =`${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    const timeHours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
    const timeMinutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
    const ampm = d.getHours() >= 12 ? 'pm' : 'am';
    const fullDate =`${date} | ${timeHours}:${timeMinutes} ${ampm}`

    return (
    <li className='post'>

        <div className='info'>
            <div className='info-name'>
                <div className='icon-color' style={{background:post.color}} />
                <h3>{post.name}</h3>
            </div>
            <p className='text'>{post.payload}</p>
            <p className='date'>{fullDate}</p>
        </div>

        <div className='postButtons'>
            <LikeButton {...{
                profile,
                post,
                likeRequest,
                changeCurrentPage,
                fetchPosts
                }}
            />
            {deleteButton}
        </div>
    </li>
    )
}

export default Post