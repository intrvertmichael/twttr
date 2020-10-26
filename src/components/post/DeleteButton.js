import React from 'react'
import {deleteRequest} from '../utilities/Requests'
import {connect} from 'react-redux'
import {updateAllPostsAction} from '../../reduxStore/actions/mongoDb'
import {setCurrentPageAction} from '../../reduxStore/actions/page'

const DeleteButton = props => {
    const {reduXprofile, updateAllPosts, currentPage, setCurrentPage} = props
    const {profile, post} = props

    // handle delete button pressed
    const handleDeleteClick = async e => {
        e.preventDefault()
        server_DeleteRequest()
    }

    const server_DeleteRequest = async () => {
        const response =  await deleteRequest({
            token:reduXprofile.token,
            _id:post._id
        })

        if(response !== 'OK'){
            console.log(response)
        }
        else {
            console.log('Post was successfully deleted.')
            updateAllPosts()
            setCurrentPage('posts')
        }
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
        reduXprofile: state.profile,
        currentPage: state.page.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAllPosts: () => dispatch(updateAllPostsAction()),
        setCurrentPage: page => dispatch(setCurrentPageAction(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)