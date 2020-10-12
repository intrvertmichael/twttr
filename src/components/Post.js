import React from 'react'
import {deleteRequest} from './Requests'
import {likeRequest} from './Requests'

const Post = props => {
    const {post} = props;
    const {profile} = props;

    const handleDeleteClick = async e => {
        e.preventDefault();
        const res = await deleteRequest({token:profile.token , _id:post._id})
        console.log(res);
        props.changeCurrentPage('update')
    }

    let counter = 0;
    const handleLikeClick = async e => {
        e.preventDefault();
        const res = await likeRequest({token:profile.token , _id:post._id})
        console.log(res);
        counter++
        props.changeCurrentPage(`update ${counter}`)
    }

    let deleteButton
    if(profile && profile._id === post.authorId){
        deleteButton = <button className="delete" onClick={handleDeleteClick}>delete</button>
    }

    const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let fullDate
    if(post){
        const d = new Date(post.date);
        let ampm = d.getHours() >= 12 ? 'pm' : 'am';
        fullDate =`${months[d.getMonth()]} ${d.getDate()} , ${d.getFullYear()} | ${d.getHours()}:${d.getMinutes()} ${ampm}`
    }

    return (
    <li className='post'>
        <div className='content'>
            <div className='icon'>
                <div className='icon-color' style={{background:post.color}}></div>
            </div>
            <div className='info'>
                <h3>{post.name}</h3>
                <p>{post.payload}</p>
                <p className='date'>{fullDate}</p>
            </div>
        </div>
        <div className='postButtons'>
        <button className="like" onClick={event=>{
            if(profile && (profile._id !== post.authorId) && !post.likes.includes(profile._id) ){
                handleLikeClick(event)
            }
        }}>{post.likes.length} {'<3'}</button>
            {deleteButton}
        </div>
    </li>
    )
}

export default Post