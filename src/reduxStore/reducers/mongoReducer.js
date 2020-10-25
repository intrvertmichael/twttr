
export const initialState = {
  allPosts: {},
  allUsers: {}
}

const postReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'ADD_POSTS':
      return {
        ...state,
        allPosts: action.payload
      }

    case 'ADD_USERS':
      return {
        ...state,
        allUsers: action.payload
      }

    default:
      return state
  }
}

export default postReducer