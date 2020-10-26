import {getPostsRequest, getUsersRequest} from '../../components/utilities/Requests'

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

export const updateAllUsersAction = () => {
	return async (dispatch, getState) => {
		const requestedUsers =  await getUsersRequest()

		// if(typeof requestedPosts === 'string'){
		// 	setErrorMessage('There was a connection error with the DB.')
		// 	reduXaddPosts([])
		// }

		const storediD = localStorage.getItem('storediD');
		const storedToken = localStorage.getItem('storedToken');

		if(storediD){
			const f = requestedUsers.find(user=> user._id === storediD)
			dispatch({
				type: 'ADD_PROFILE',
				payload: {...f, token:storedToken}
			})
		}

		dispatch({
			type: 'UPDATE_ALL_USERS',
			payload: requestedUsers
		})
	}
}