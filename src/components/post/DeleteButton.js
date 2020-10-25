import React from 'react'
import {deleteRequest} from '../utilities/Requests'
import {connect} from 'react-redux'

const DeleteButton = props => {
    const {reduXprofile} = props
    const {profile, post, server_GetPostsRequest} = props

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
            server_GetPostsRequest()
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
        reduXprofile: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)