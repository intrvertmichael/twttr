import {getPostsRequest, getUsersRequest, deleteRequest, likeRequest, dislikeRequest} from '../../components/utilities/Requests'

export const updateAllPostsAction = () => {
	return async (dispatch, getState) => {
		let response
		try {
			response =  await getPostsRequest()
		} catch(e) {
			console.log(e);
		}

		if(typeof response === 'string'){
			console.log(response)
			dispatch({
				type: 'UPDATE_ALL_POSTS',
				payload: []
			})

			dispatch({
				type: 'SET_ERROR_MESSAGE',
				message: response
			})
		}
		else {
			dispatch({
				type: 'UPDATE_ALL_POSTS',
				payload: response
			})
		}
	}
}

export const updateAllUsersAction = () => {
	return async (dispatch, getState) => {

		let requestedUsers
		try {
			requestedUsers =  await getUsersRequest()
		} catch(e) {
			console.log(e);
		}

		if(typeof requestedPosts === 'string'){
			console.log('There was a connection error with the DB.')
			requestedUsers= []
		}

		// console.log(requestedUsers)

		const storediD = localStorage.getItem('storediD');
		const storedToken = localStorage.getItem('storedToken');

		if(storediD){
			let f
			try {
				f = requestedUsers.find(user=> user._id === storediD)
			} catch (error) {
				console.error(error);
			}
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

//
// SINGLE POST
//

export const deletePostAction = (tokenPostInfo) => {
	return async (dispatch, getState) => {

		const response =  await deleteRequest(tokenPostInfo)

		if(response !== 'OK'){
			console.log(response)
		}
		else {
			console.log('Post was successfully deleted.')
			dispatch({
				type: 'SET_CURRENT_PAGE',
				currentPage: 'posts'
			})
		}
	}
}

export const addLikeAction = (tokenPostInfo) => {
	return async (dispatch, getState) => {

		const response = await likeRequest(tokenPostInfo)

		if(response !== 'OK'){
			console.log(response)
			dispatch({
				type: 'SET_ERROR_MESSAGE',
				message: response
			})
		}
		else {
			console.log('Like was added.')
		}
	}
}

export const removeLikeAction = (tokenPostInfo) => {
	return async (dispatch, getState) => {

		const response = await dislikeRequest(tokenPostInfo)

		if(response !== 'OK'){
			console.log(response)
			dispatch({
				type: 'SET_ERROR_MESSAGE',
				message: response
			})
		}
		else {
			console.log('Like was removed.')
		}
	}
}