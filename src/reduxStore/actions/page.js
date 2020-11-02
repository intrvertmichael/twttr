import {singlepostRequest, userPostsRequest} from '../../components/utilities/Requests'

export const setCurrentPageAction = (page) => {
	return (dispatch, getState) => {
		dispatch({
			type: 'SET_CURRENT_PAGE',
			currentPage: page
		})
	}
}

export const setErrorMessageAction = (message) => {
	return (dispatch, getState) => {
		dispatch({
			type: 'SET_ERROR_MESSAGE',
			message: message
		})
	}
}

export const setSearchAction = (text) => {
	return (dispatch, getState) => {
		dispatch({
			type: 'SET_SEARCH',
			text: text
		})
	}
}

export const setSearchResultsAction = (payload) => {
	return (dispatch, getState) => {
		dispatch({
			type: 'SET_SEARCH_RESULTS',
			payload: payload
		})
	}
}

export const getUserPostsAction = (authorId) => {
	return async (dispatch, getState) => {
		const response =  await userPostsRequest({authorId:authorId})

		if(typeof response === 'string'){
			console.log(response)
			dispatch({
				type: 'SET_ERROR_MESSAGE',
				message: response
			})
		}
		else {
			console.log('User\'s Posts were retreived.')
			dispatch({
				type: 'SET_SEARCH_RESULTS',
				payload: response
			})
		}
	}
}

export const setSinglePostAction = (postId) => {
	if(postId){
		return async (dispatch, getState) => {
			const response = await singlepostRequest(postId)
			dispatch({
				type: 'SET_SINGLE_POST',
				payload: response
			})
		}
	} else {
		return (dispatch, getState) => {
			dispatch({
				type: 'SET_SINGLE_POST',
				payload: null
			})
		}
	}
}
