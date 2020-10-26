import {getPostsRequest} from '../../components/utilities/Requests'

export const addPostsAction = (posts) => {
	return (dispatch, getState) => {
		dispatch({
			type: 'ADD_POSTS',
			payload: posts
		})
	}
}

export const addUsersAction = (users) => {
	return (dispatch, getState) => {
		dispatch({
			type: 'ADD_USERS',
			payload: users
		})
	}
}

export const updateAllPostsAction = () => {
	return async (dispatch, getState) => {
		const requestedPosts =  await getPostsRequest()

		// if(typeof requestedPosts === 'string'){
		// 	setErrorMessage('There was a connection error with the DB.')
		// 	reduXaddPosts([])
		// }


		dispatch({
			type: 'UPDATE_ALL_POSTS',
			payload: requestedPosts
		})
	}
}