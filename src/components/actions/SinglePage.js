import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addCommentRequest, deleteCommentRequest} from '../utilities/Requests'
import {setSinglePostAction, setCurrentPageAction, setSearchAction, setSearchResultsAction} from '../../reduxStore/actions/page'

import Post from '../post/Post'
import '../../styles/SinglePage.css'

const SinglePage = props => {
    const [commentText, setCommentText] = useState()
    const {singlePost, profile, allUsers} = props
    const {setSinglePost, setCurrentPage, setSearch, setSearchResults} = props

    const handleComment = async e => {
        e.preventDefault()

        const commentPayload = {
            token: profile.token,
            _id: singlePost._id,
            message: commentText.trim()
        }

        const response = await addCommentRequest(commentPayload)

        if(response !== 'OK'){
            console.log(response)
        }
        else {
            console.log('Comment was added.')
            setCommentText('')
            await setSinglePost(singlePost._id)
        }

    }

    const form = (
                <form onSubmit={handleComment}>
                    <input
                        type='text'
                        name="comment"
                        className='comment-input'
                        value={commentText}
                        placeholder="Enter your comment here"
                        onChange={e=>setCommentText(e.target.value)}
                    />
                </form>
                )

    const handleDeleteComment = async commentId => {
        const commentPayload = {
            token: profile.token,
            postId: singlePost._id,
            commentId: commentId
        }

        const response = await deleteCommentRequest(commentPayload)

        if(response !== 'OK'){
            console.log(response)
        }
        else {
            console.log('Comment was added.')
            await setSinglePost(singlePost._id)
        }
    }

    const allComments = singlePost.comments?
                        singlePost.comments.map(comment=>{

                            let author
                            if(allUsers){
                                try {
                                    author = allUsers.find(user=> user._id === comment.authorId)
                                } catch (error) {
                                    console.error(error);
                                }
                            }

                            return (
                            <div className='single-comment' style={{borderRight: `10px solid ${author.color}`}}>
                                <div>
                                    <span> {`${author.name}: `} </span>
                                    {comment.message}
                                </div>

                                {
                                profile && (comment.authorId === profile._id) ?
                                <button
                                    className='delete-comment'
                                    onClick={e=>{
                                        e.preventDefault()
                                        handleDeleteComment(comment._id)
                                    }}
                                > Delete </button> : ''
                                }

                            </div>
                            )
                        }) : ''


    return (
        <div>

            <div className='clear-page' onClick={()=>{
                setSearch(null)
                setSearchResults(null)
                setCurrentPage('posts')
                }}>
                Back to All Posts
            </div>

            <Post post={singlePost} />

            <div className='comments-page'>
                <div className='comments-loop'>
                    {allComments}
                </div>
                {profile? form : ''}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        singlePost: state.page.singlePost,
        profile: state.profile,
        allUsers: state.mongoDb.allUsers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearch: results => dispatch(setSearchAction(results)),
        setSearchResults: results => dispatch(setSearchResultsAction(results)),
        setSinglePost: postId => dispatch(setSinglePostAction(postId)),
        setCurrentPage: page => dispatch(setCurrentPageAction(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage)