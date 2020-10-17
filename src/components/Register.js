import React, {useState, useRef} from 'react';
import { TwitterPicker } from 'react-color';

import {registerRequest} from './Requests'
import '../styles/Register.css';

const Register = props => {
    const {addProfile, changeCurrentPage, addErrorMessage} = props
    const [registerInfo, setRegisterInfo] = useState();
    const rePasswordEl = useRef();

    // when submit button is pressed
    const handleSubmit = event => {
        console.log(registerInfo)
        event.preventDefault()

        const everythingNotFilled = !registerInfo || !registerInfo.name || !registerInfo.password || !registerInfo.rePassword || !registerInfo.color;

        if(everythingNotFilled){
            addErrorMessage('Error: You have to fill out all fields')
        }
        else {
            const passwordsDontMatch = registerInfo.password !== registerInfo.rePassword

            if(passwordsDontMatch){
                rePasswordEl.current.style.backgroundColor = "#FFE1E1";
                addErrorMessage('Error: Passwords do not match')
            }
            else {
                rePasswordEl.current.style.backgroundColor = "white";
                server_RegisterRequest()
            }
        }
    }

    // send request to register user
    const server_RegisterRequest = async () =>{
        const response = await registerRequest(registerInfo)
        if(typeof(response)=='string'){
            console.log(response)
            addErrorMessage(response)
        } else {
            console.log('Log in was successful')
            addProfile(response);
            changeCurrentPage('posts')
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
                    name : e.target.value.toLowerCase().trim()
                })}
            />
            <input
                type='password'
                name="password"
                placeholder="Enter your password"
                onChange={(e)=> setRegisterInfo({
                    ...registerInfo,
                    password : e.target.value.trim()
                })}
            />
            <input
                type='password'
                name="rePassword"
                ref={rePasswordEl}
                placeholder="Re-enter your password"
                onChange={(e)=> setRegisterInfo({
                    ...registerInfo,
                    rePassword : e.target.value.trim()
                })}
            />

            <div className='color-btns'>
                <div className='color-btns-label'>
                    <p> Choose a color: </p>
                </div>
                <div className='color-btns-choices'>
                <TwitterPicker
                    triangle='hide'
                    onChangeComplete={(color, event)=>{
                        setRegisterInfo({
                            ...registerInfo,
                            color : color.hex
                        })
                }}/>
                </div>
            </div>


            <div className='btns'>
                <button onClick={()=> {
                    changeCurrentPage('posts')
                    addErrorMessage('')
                    }}> Cancel </button>
                <button className='btns submit'type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Register;