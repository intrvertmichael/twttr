export const setProfileAction = (profile) => {
	return (dispatch, getState) => {
		dispatch({
			type: 'ADD_PROFILE',
			payload: profile
		})
	}
}

export const removeProfileAction = (profile) => {
	return (dispatch, getState) => {
		dispatch({ type: 'REMOVE_PROFILE' })
	}
}