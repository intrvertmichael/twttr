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