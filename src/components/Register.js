import React, {useState, useRef} from 'react';
import {registerRequest} from './Requests'
import '../styles/Register.css';

const Register = props => {
    const [registerInfo, setRegisterInfo] = useState();
    const rePasswordEl = useRef();

    const handleSubmit = async event =>{
    event.preventDefault()
        console.log(registerInfo)
        if(registerInfo.password !== registerInfo.rePassword){
            rePasswordEl.current.style.backgroundColor = "red";
            console.log('passwords do not match')
        } else {
            rePasswordEl.current.style.backgroundColor = "white";
            const response = await registerRequest(registerInfo)
            if(typeof(response)=='string'){
                console.log('there is an error')
                console.log(response)
            } else {
                console.log('log in was successful')
                props.addProfile(response);
                props.changeCurrentPage('posts')
            }
        }
    }

    const onEnterPress = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            handleSubmit(e);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='registerForm' onKeyDown={onEnterPress}>
            <input
                type='text'
                name="name"
                placeholder="Enter your name"
                onChange={(e)=> setRegisterInfo({
                    ...registerInfo,
                    name:e.target.value.toLowerCase().trim()
                })}
            />
            <input
                type='password'
                name="password"
                placeholder="Enter your password"
                onChange={(e)=> setRegisterInfo({
                    ...registerInfo,
                    password:e.target.value.trim()
                })}
            />
            <input
                type='password'
                name="rePassword"
                ref={rePasswordEl}
                placeholder="Re-enter your password"
                onChange={(e)=> setRegisterInfo({
                    ...registerInfo,
                    rePassword:e.target.value.trim()
                })}
            />
            <input
                type='text'
                name="color"
                placeholder="Enter a Color"
                onChange={(e)=> setRegisterInfo({
                    ...registerInfo,
                    color:e.target.value.trim()
                })}
            />
            <div className='btns'>
                <button onClick={()=> props.changeCurrentPage('log in')}> Log In </button>
                <button className='btns'type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Register;