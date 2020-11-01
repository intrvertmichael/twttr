import React from 'react'
import {connect} from 'react-redux'
import {updateAllPostsAction, deletePostAction} from '../../reduxStore/actions/mongoDb'
import {setCurrentPageAction} from '../../reduxStore/actions/page'

const DeleteButton = props => {
    const {reduXprofile, updateAllPosts, deletePostRequest} = props
    const {post} = props

    // handle delete button pressed
    const handleDeleteClick = async e => {
        e.preventDefault()
        await deletePostRequest({
            token:reduXprofile.token,
            _id:post._id
        })
        updateAllPosts()
    }

    return (
        <button
            className="delete"
            onClick={handleDeleteClick}>
        Delete
        </button>
        )
}


const mapStateToProps = state => {
    return {
        allUsers: state.mongoDb.allUsers,
        reduXprofile: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAllPosts: () => dispatch(updateAllPostsAction()),
        deletePostRequest: (tokenPostInfo) => dispatch(deletePostAction(tokenPostInfo)),
        setCurrentPage: page => dispatch(setCurrentPageAction(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)