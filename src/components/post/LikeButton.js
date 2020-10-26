import React from 'react'
import { FaRegHeart } from "react-icons/fa"
import {likeRequest, dislikeRequest} from '../utilities/Requests'
import {connect} from 'react-redux'
import {updateAllPostsAction} from '../../reduxStore/actions/mongoDb'
import {setSinglePostAction} from '../../reduxStore/actions/page'

const LikeButton = props => {
    const {reduXprofile, updateAllPosts, currentPage, setSinglePost} = props
    const {post} = props;

    const server_AddLike = async (e) => {
        e.preventDefault()
        const response = await likeRequest({
            token:reduXprofile.token,
            _id:post._id
        })

        if(response !== 'OK'){ console.log(response) }
        else {
            console.log('Like was added.')
            if(currentPage==='posts'){
                updateAllPosts()
            }
            else if(currentPage==='single-page') {
                await setSinglePost(post._id)
            }
        }
    }

    const server_RemoveLike = async (e) => {
        e.preventDefault()

        const response = await dislikeRequest({
            token:reduXprofile.token,
            _id:post._id
        })

        if(response !== 'OK'){
            console.log(response)
        }
        else {
            console.log('Like was removed.')
            if(currentPage==='posts'){
                updateAllPosts()
            }
            else if(currentPage==='single-page') {
                await setSinglePost(post._id)
            }
        }
    }

    // if user is able to like, make it red
    let style = {};

    const userDidntLikedBefore = reduXprofile && post.authorId !== reduXprofile._id && !post.likes.includes(reduXprofile._id)

    const userLikedBefore = reduXprofile && post.authorId !== reduXprofile._id && post.likes.includes(reduXprofile._id)

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

const mapStateToProps = state => {
    return {
        allUsers: state.mongoDb.allUsers,
        reduXprofile: state.profile,
        currentPage: state.page.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAllPosts: () => dispatch(updateAllPostsAction()),
        setSinglePost: postId => dispatch(setSinglePostAction(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)