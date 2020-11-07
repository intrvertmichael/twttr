import React from 'react'
import {connect} from 'react-redux'
import {deleteCommentRequest} from '../utilities/Requests'
import {setSinglePostAction, setSearchAction} from '../../reduxStore/actions/page'

const AllComments = props => {
    const {singlePost, allUsers, profile} = props
    const {setSinglePost} = props

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

    return singlePost.comments.map(comment=>{

    let author = ''
    if(allUsers){
        try {
            author = allUsers.find(user=> user._id === comment.authorId)
        } catch (error) {
            console.error(error);
        }
    }

    const formattedMessage = comment.message.split(/\s+/).map(word=>{
        if(word.startsWith('#')){
            return (
                <button
                    // onClick={()=>hashtagClick(word)}
                    className='hashtag'
                    style={{cursor: 'auto'}}
                >
                {`${word} `}
                </button>)
        } else {
            return (word + ' ')
        }
    })

    return (
    <div className='single-comment' style={{borderRight: `10px solid ${author.color}`}}>
        <div>
            <span> {`${author.name}: `} </span>
            {formattedMessage}
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
    })
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
        setSinglePost: postId => dispatch(setSinglePostAction(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllComments)