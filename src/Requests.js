// import React from 'react'
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