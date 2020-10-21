import React from 'react'
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';

const Post = props => {
    const {post, profile, users, changeCurrentPage, server_GetPostsRequest} = props;

    let authorProfile = users.find(user => user._id === post.authorId)

    if(!authorProfile){
        authorProfile = {
            name:'User no longer exists',
            color: 'red'
        }
    }

    return (
    <li className='post'>
        <div className='post-header'>
            <div className='info-name'>
                <div className='icon-color' style={{background:authorProfile.color}} />
                <h3>{authorProfile.name}</h3>
            </div>
            <LikeButton {...{
                profile,
                post,
                changeCurrentPage,
                server_GetPostsRequest
                }}
            />
        </div>

        <div className='post-body'>
            <p className='text'>{getFinalText(post.payload, users)}</p>
        </div>

        <div className='post-footer'>
            <p className='date'>{getFullDate(post.date)}</p>

            {profile && profile._id === post.authorId?
            <DeleteButton {...{
                profile,
                post,
                server_GetPostsRequest,
            }}/> : ''
            }
        </div>
    </li>
    )
}

const getFullDate = (postDate) => {
    const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const d = new Date(postDate)
    const date =`${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    const timeHours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
    const timeMinutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
    const ampm = d.getHours() >= 12 ? 'pm' : 'am';
    return `${date} | ${timeHours}:${timeMinutes} ${ampm}`
}

const getFinalText = (postText, users) => {
    return (
        <>
        {postText.split(' ').map(word => {
            if(word.startsWith('#')){
                return <button className='hashtag'>{word}</button>
            } else if(word.startsWith('@')){
                const mentioned = users.find(user=> user.name === word.toLowerCase().substring(1))

                let style={}

                if(mentioned){
                    style = {background:mentioned.color, color: 'black'}
                }


                return (<button
                            style={style}
                            className='hashtag'
                            >
                                {word}
                            </button>)
            } else {
                return word + ' '
            }
        })}
        </>
    )
}

export default Post