
export const initialState = {
    currentPage: 'posts'
}

const pageReducer = (state = initialState, action) => {

switch (action.type) {
    case 'SET_CURRENT_PAGE':
        return {...state, currentPage: action.currentPage}

    case 'SET_ERROR_MESSAGE':
        return {...state, errorMessage: action.message}

    case 'SET_SEARCH':
        return {...state, search: action.text}

    case 'SET_SEARCH_RESULTS':
        return {...state, searchResults: action.payload}
    
    case 'SET_SINGLE_POST':
        return {...state, singlePost: action.payload}

    default:
        return state
}}

export default pageReducer