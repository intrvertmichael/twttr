import React, {useState} from 'react';
import {logInRequest} from './Requests'
import '../styles/LogIn.css';

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
            props.changeCurrentPage('posts');
        }
    }

    const onEnterPress = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            handleSubmit(e);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='loginForm' onKeyDown={onEnterPress}>
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

            <div className='btns'>
                <button className='btns' onClick={()=> props.changeCurrentPage('register')}> Register </button>
                <button className='btns' type="submit">Submit</button>
            </div>
        </form>
    )
}

export default LogIn;