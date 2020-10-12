import React, {useState} from 'react';
import {logInRequest} from './Requests'

const LogIn = props => {
    const [loginInfo, setLoginInfo] = useState();

    const handleSubmit = async event =>{
        event.preventDefault()
        const response = await logInRequest(loginInfo)
        if(typeof(response)=='string'){
            console.log(response)
        } else {
            console.log('Log in was successful')
            props.addProfile(response);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='loginForm'>
            <label> Log In </label>
            <input
                type='text'
                name="name"
                placeholder="Enter your name"
                onChange={(e)=> setLoginInfo({
                    ...loginInfo,
                    name:e.target.value.toLowerCase().trim()
                })}
            />

            <input
                type='password'
                name="password"
                placeholder="Enter your password"
                onChange={(e)=> setLoginInfo({
                    ...loginInfo,
                    password:e.target.value.trim()
                })}
            />

            <input type='submit' name="submit"/>
        </form>
    )
}

export default LogIn;