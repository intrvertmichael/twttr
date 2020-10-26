import React, {useState} from 'react'
import {connect} from 'react-redux'

import Post from '../post/Post'
import '../../styles/SinglePage.css'
const SinglePage = props => {
    const [commentText, setCommentText] = useState()
    const {singlePost, profile} = props

    const handleComment = e => {
        e.preventDefault()
        console.log('comments: ')
        console.log(commentText)
    }

    const form = (
                <form onSubmit={handleComment}>
                    <input
                        type='text'
                        name="comment"
                        className='comment-input'
                        placeholder="Enter your comment here"
                        onChange={e=>setCommentText(e.target.value.trim())}
                    />
                </form>
                )

    return (
        <div>
            <Post post={singlePost} />
            <div className='comments-page'>
                {profile? form : ''}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        singlePost: state.page.singlePost,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(SinglePage)