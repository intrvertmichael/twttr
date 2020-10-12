import axios from 'axios'

export const getPostsRequest = async () => {
    let message = '' ;
    const response = await axios.get('http://localhost:3001/api/posts')
    .catch(err => message = `Error: , ${err.response.data}`)
    return message!==''? message : response.data;
}

export const logInRequest = async (userInfo) => {
    let message = '' ;
    const response = await axios.post('http://localhost:3001/api/login', userInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const registerRequest = async (userInfo) => {
    let message = '' ;
    const response = await axios.post('http://localhost:3001/api/users', userInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const composeRequest = async (postInfo) => {
    let message = '' ;
    const response = await axios.post('http://localhost:3001/api/posts', postInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const deleteRequest = async (postInfo) => {
    let message = '' ;
    const response = await axios.post('http://localhost:3001/api/delete', postInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const likeRequest = async (postInfo) => {
    let message = '' ;
    const response = await axios.post('http://localhost:3001/api/like', postInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}