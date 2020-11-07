import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addCommentRequest} from '../utilities/Requests'
import {setSinglePostAction, setCurrentPageAction, setSearchAction, setSearchResultsAction} from '../../reduxStore/actions/page'
import AllComments from './AllComments'

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

    return (
        <div>
            <div
                className='clear-page'
                onClick={()=>{
                    setSearch(null)
                    setSearchResults(null)
                    setCurrentPage('posts')
                }}
            >
            Back to All Posts
            </div>

            <Post post={singlePost} />

            <div className='comments-page'>
                <div className='comments-loop'>
                <AllComments {...{singlePost, allUsers, profile}}/>
                </div>
                {
                profile?
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
                : ''
                }
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