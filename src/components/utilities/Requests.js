import axios from 'axios'

export const getPostsRequest = async () => {
    let message = '' ;
    const response = await axios.get('/api/posts')
    .catch(err => message = `Error: , ${err.response.data}`)
    return message!==''? message : response.data;
}

export const getUsersRequest = async () => {
    let message = '' ;
    const response = await axios.get('/api/users')
    .catch(err => message = `Error: , ${err.response.data}`)
    return message!==''? message : response.data;
}

export const logInRequest = async (userInfo) => {
    let message = '' ;
    const response = await axios.post('/api/login', userInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const registerRequest = async (userInfo) => {
    let message = '' ;
    const response = await axios.post('/api/users', userInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const composeRequest = async (postInfo) => {
    let message = '' ;
    const response = await axios.post('/api/posts', postInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const deleteRequest = async (postInfo) => {
    let message = '' ;
    const response = await axios.post('/api/delete', postInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const likeRequest = async (postInfo) => {
    let message = '' ;
    const response = await axios.post('/api/like', postInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const dislikeRequest = async (postInfo) => {
    let message = '' ;
    const response = await axios.post('/api/dislike', postInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const searchRequest = async (postInfo) => {
    let message = '' ;
    const response = await axios.post('/api/search', postInfo)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}

export const singlepostRequest = async (postInfo) => {
    let message = '' ;
    const response = await axios.get(`/api/post/${postInfo}`)
    .catch(err => message = `Error: ${err.response.data}`)
    return message!==''? message : response.data;
}