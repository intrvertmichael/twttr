
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