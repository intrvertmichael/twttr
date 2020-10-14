import React, {useState, useRef} from 'react';
import {registerRequest} from './Requests'
import '../styles/Register.css';

const Register = props => {
    const [registerInfo, setRegisterInfo] = useState();
    const [colorPressed, setColorPressed] = useState();
    const rePasswordEl = useRef();

    // when submit button is pressed
    const handleSubmit = async event =>{
    event.preventDefault()
    console.log(registerInfo)

    //make sure everything is filled out
    const everythingNotFilled = !registerInfo || !registerInfo.name || !registerInfo.password || !registerInfo.rePassword || !registerInfo.color;
    if(everythingNotFilled){
        // if its not then send error
        props.addErrorMessage('Error: You have to fill out all fields')
    } else {
        // if it is make sure passwords match
        const passwordsDontMatch = registerInfo.password !== registerInfo.rePassword
        if(passwordsDontMatch){
            rePasswordEl.current.style.backgroundColor = "#FFE1E1";
            props.addErrorMessage('Error: Passwords do not match')
        } else {
            rePasswordEl.current.style.backgroundColor = "white";

            // if everything matches and is good then
            // send request to register user
            const response = await registerRequest(registerInfo)

            // if response is a string it's an error
            if(typeof(response)=='string'){
                console.log('there is an error')
                console.log(response)
            } else {

                // if it's an object it was successful
                console.log('log in was successful')
                props.addProfile(response);
                props.changeCurrentPage('posts')
            }
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

            {/* enter your own color
            <input
                type='text'
                name="color"
                placeholder="Enter a Color"
                onChange={(e)=> setRegisterInfo({
                    ...registerInfo,
                    color:e.target.value.trim()
                })}
            /> */}

            <div className='color-btns'>
                <div className='color-btns-label'>
                    <p> Choose a color: </p>
                </div>
                <div className='color-btns-choices'>
                    <button
                        onClick={e=>{
                            // set orange
                            e.preventDefault()
                            setColorPressed(1)
                            setRegisterInfo({
                                ...registerInfo,
                                color:'#FFDAC5'
                            })
                        }}
                        className={colorPressed===1 ? 'selected' : null}
                    />
                    <button
                        onClick={e=>{
                            // set green
                            e.preventDefault()
                            setColorPressed(2)
                            setRegisterInfo({
                                ...registerInfo,
                                color:'#C5FFD1'
                            })
                        }}
                        className={colorPressed===2 ? 'selected' : null}
                    />
                    <button
                        onClick={e=>{
                            // set blue
                            e.preventDefault()
                            setColorPressed(3)
                            setRegisterInfo({
                                ...registerInfo,
                                color:'#C5DCFF'
                            })
                        }}
                        className={colorPressed===3 ? 'selected' : null}
                    />
                    <button
                        onClick={e=>{
                            // set purple
                            e.preventDefault()
                            setColorPressed(4)
                            setRegisterInfo({
                                ...registerInfo,
                                color:'#F0C5FF'
                            })
                        }}
                        className={colorPressed===4 ? 'selected' : null}
                    />
                </div>
            </div>


            <div className='btns'>
                <button onClick={()=> {
                    props.changeCurrentPage('log in')
                    props.addErrorMessage('')
                    }}> Log In </button>
                <button className='btns'type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Register;