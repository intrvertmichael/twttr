import React, {useState} from 'react';
import {logInRequest} from './Requests'

const LogIn = () => {
    const [loginInfo, setLoginInfo] = useState();

    const handleSubmit = async event =>{
    event.preventDefault()
    if(loginInfo){
        const response = await logInRequest(loginInfo)
        if(typeof(response)=='string'){
            console.log('there is an error')
            console.log(response)
        } else {
            console.log('log in was successful')
            console.log(response)
        }
    } else {
        console.log(' or password dont work')
    }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name="name"
                placeholder="Enter your name"
                onChange={(e)=> setLoginInfo({...loginInfo,name:e.target.value})}
            />

            <input
                type='password'
                name="password"
                placeholder="Enter your password"
                onChange={(e)=> setLoginInfo({...loginInfo,password:e.target.value})}
            />

            <input type='submit' name="submit"/>
        </form>
    )
}

export default LogIn;