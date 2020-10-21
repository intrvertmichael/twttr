import React from 'react'
import {deleteRequest} from '../utilities/Requests'

const DeleteButton = props => {
    const {profile, post, server_GetPostsRequest} = props

    // handle delete button pressed
    const handleDeleteClick = async e => {
        e.preventDefault()
        server_DeleteRequest()
    }

    const server_DeleteRequest = async () => {
        const response =  await deleteRequest({
            token:profile.token,
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

export default DeleteButton