import React from 'react'
import {connect} from 'react-redux'

import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import {singlepostRequest} from '../utilities/Requests'
import {setSearchAction} from '../../reduxStore/actions/page'

const Post = props => {
    const {setSearch, allUsers, reduXprofile} = props
    const {post, profile, changeCurrentPage, server_GetPostsRequest} = props

    let authorProfile = allUsers.find(user => user._id === post.authorId)

    if(!authorProfile){
        authorProfile = {
            name:'User no longer exists',
            color: 'red'
        }
    }


    const getFinalText = (postText, allUsers) => {
        return (
            <>
            {postText.split(/\s+/).map(word => {
    
                if(word.startsWith('#')){
                    return (
                        <button
                            onClick={()=>hashtagClick(word)}
                            className='hashtag'
                        >
                        {word}
                        </button>)
                } 
                else if(word.startsWith('@')){
                    const mentioned = allUsers.find(user=> user.name === word.toLowerCase().substring(1))
    
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
                }
    
                else {
                    return word + ' '
                }
            })}
            </>
        )
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // const postClick = async () => {
    //     const res = await singlepostRequest(post._id)
    //     console.log(res.payload)
    // }

    const hashtagClick = hashtag => {
        console.log('hashtag', hashtag)
        setSearch(hashtag)
    }

    return (
    <li className='post'>
    {/* <li className='post' onClick={postClick}> */}
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
            <p className='text'>{getFinalText(post.payload, allUsers)}</p>
        </div>

        <div className='post-footer'>
            <p className='date'>{getFullDate(post.date)}</p>

            {reduXprofile && reduXprofile._id === post.authorId?
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

const mapStateToProps = state => {
    return {
        allPosts: state.mongoDb.allPosts,
        allUsers: state.mongoDb.allUsers,
        reduXprofile: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearch: text => dispatch(setSearchAction(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)