import {registerRequest, logInRequest} from '../../components/utilities/Requests'

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

export const logInAction = (profile) => {
	return async (dispatch, getState) => {
		const response = await logInRequest(profile)
		if(typeof(response)=='string'){
			console.log(response)
			dispatch({
				type: 'SET_ERROR_MESSAGE',
				message: response
			})
		} else {
			console.log('Log in was successful')
			const allUsers = getState().mongoDb.allUsers
			const userProfile = allUsers.find(user=> user._id === response._id)

			localStorage.setItem('storediD', response._id);
			localStorage.setItem('storedToken', response.token);

			dispatch({
				type: 'ADD_PROFILE',
				payload: {...userProfile, token: response.token}
			})

			dispatch({
				type: 'SET_CURRENT_PAGE',
				currentPage: 'posts'
			})
		}
	}
}

export const registerUserAction = (profile) => {
	return async (dispatch, getState) => {

		const response = await registerRequest(profile)

		if(typeof(response)=='string'){
			console.log(response)
			dispatch({
				type: 'SET_ERROR_MESSAGE',
				message: response
			})
		} else {
			console.log('Registration was successful')
			dispatch({
				type: 'ADD_PROFILE',
				payload: response
			})
		}
	}
}