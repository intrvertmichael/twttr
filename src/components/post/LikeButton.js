import React from 'react'
import { FaRegHeart } from "react-icons/fa"
import {connect} from 'react-redux'
import {updateAllPostsAction, addLikeAction, removeLikeAction} from '../../reduxStore/actions/mongoDb'
import {setSinglePostAction, setErrorMessageAction} from '../../reduxStore/actions/page'

const LikeButton = props => {
    const {reduXprofile, updateAllPosts, currentPage, setSinglePost} = props
    const {post, addLikeRequest, removeLikeRequest, setErrorMessage} = props;

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
        <button className="like" onClick={ async event => {
            if(!reduXprofile){
                setErrorMessage('Please Register or Log In to be able to get the full experience')
            }
            else if(userDidntLikedBefore){
                await addLikeRequest({
                    token:reduXprofile.token,
                    _id:post._id
                })
            }
            else if(userLikedBefore){
                await removeLikeRequest({
                    token:reduXprofile.token,
                    _id:post._id
                })
            }

            // reload the page
            if(currentPage === 'posts'){
                await updateAllPosts()
            }
            else if(currentPage === 'single-page') {
                await setSinglePost(post._id)
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
        addLikeRequest: (tokenPostInfo) => dispatch(addLikeAction(tokenPostInfo)),
        removeLikeRequest: (tokenPostInfo) => dispatch(removeLikeAction(tokenPostInfo)),
        setSinglePost: postId => dispatch(setSinglePostAction(postId)),
        setErrorMessage: message => dispatch(setErrorMessageAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)