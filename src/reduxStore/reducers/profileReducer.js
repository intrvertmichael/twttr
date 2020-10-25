
export const initialState = null

const profileReducer = (state = initialState, action) => {

switch (action.type) {

    case 'ADD_PROFILE':
        return {...state, ...action.payload}
    
    case 'REMOVE_PROFILE':
        return null

    default:
        return state

}}

export default profileReducer