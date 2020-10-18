import React from 'react'
import LikeButton from './LikeButton';
import {deleteRequest} from './Requests'

const Post = props => {
    const {post, profile, users, changeCurrentPage, server_GetPostsRequest} = props;

    let authorProfile = users.find(user => user._id === post.authorId)

    if(!authorProfile){
        authorProfile = {
            name:'User no longer exists',
            color: 'red'
        }
    }

    // handle delete button pressed
    const handleDeleteClick = async e => {
        e.preventDefault()
        server_DeleteRequest()
    }

    const server_DeleteRequest = async () => {
        const response =  await deleteRequest({
            token:profile.token,
            _id:post._id
        })

        if(response !== 'OK'){
            console.log(response)
        }
        else {
            console.log('Post was successfully deleted.')
            server_GetPostsRequest()
        }
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

    let finalText = <> {post.payload.split(' ').map(word => {
        if(word.startsWith('#')){
            return <button>{word}</button>
        } else {
            return word + ' '
        }
    })}</>

    return (
    <li className='post'>

        <div className='info'>
            <div className='info-name'>
                <div className='icon-color' style={{background:authorProfile.color}} />
                <h3>{authorProfile.name}</h3>
            </div>
            <p className='text'>{finalText}</p>
            <p className='date'>{fullDate}</p>
        </div>

        <div className='postButtons'>
            <LikeButton {...{
                profile,
                post,
                changeCurrentPage,
                server_GetPostsRequest
                }}
            />
            {deleteButton}
        </div>
    </li>
    )
}

export default Post