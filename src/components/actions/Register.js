import React, {useState, useRef} from 'react';
import { TwitterPicker } from 'react-color';
import {connect} from 'react-redux'
import '../../styles/Register.css';
import {setProfileAction, registerUserAction} from '../../reduxStore/actions/profile'
import {setCurrentPageAction, setErrorMessageAction} from '../../reduxStore/actions/page'
import tinycolor from 'tinycolor2'

const Register = props => {
    const {registerUser, setCurrentPage, setErrorMessage} = props
    const [registerInfo, setRegisterInfo] = useState({color:'#e0e0e0'});
    const rePasswordEl = useRef();

    // when submit button is pressed
    const handleSubmit = event => {
        event.preventDefault()

        const everythingNotFilled = !registerInfo || !registerInfo.name || !registerInfo.password || !registerInfo.rePassword || !registerInfo.color;

        if(everythingNotFilled){
            setErrorMessage('Error: You have to fill out all fields')
        }
        else {
            const passwordsDontMatch = registerInfo.password !== registerInfo.rePassword

            const nameHasBlank = registerInfo.name.split('').includes(' ')
            const nameIsTooLong = registerInfo.name.length > 20;
            const profileColor = tinycolor(registerInfo.color);
            console.log('dark?: ', profileColor.isDark())

            if(passwordsDontMatch){
                rePasswordEl.current.style.backgroundColor = "#FFE1E1";
                setErrorMessage('Error: Passwords do not match')
            }
            else if(nameHasBlank) {
                setErrorMessage('Error: Name can\'t have any spaces')
            }
            else if(nameIsTooLong) {
                setErrorMessage('Error: Name can\'t be that long')
            }
            else if (profileColor.isDark()){
                setRegisterInfo({
                    ...registerInfo,
                    color : '#e0e0e0'
                })
                setErrorMessage('Error: Please choose a lighter color')
            }
            else {
                rePasswordEl.current.style.backgroundColor = "white";
                registerUser(registerInfo)
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
                onChange ={ e => setRegisterInfo({
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

            <div className='color-btns' style={{background: registerInfo.color}}>
                <div className='color-btns-label'>
                    <p> Choose a color: </p>
                </div>
                <div className='color-btns-choices'>
                <TwitterPicker
                    triangle='hide'
                    color = {registerInfo.color}
                    onChange = { (color, event) => {
                        setRegisterInfo({
                            ...registerInfo,
                            color : color.hex
                        })
                    }}
                />
                </div>
            </div>


            <div className='btns'>
                <button onClick={()=> {
                    setCurrentPage('posts')
                    setErrorMessage(null)
                    }}> Cancel </button>
                <button className='btns submit'type='submit'>Submit</button>
            </div>
        </form>
    )
}


const mapStateToProps = state => {
    return {
        allUsers: state.mongoDb.allUsers,
        reduXprofile: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProfile: profile => dispatch(setProfileAction(profile)),
        registerUser: profile => dispatch(registerUserAction(profile)) ,
        setCurrentPage: page => dispatch(setCurrentPageAction(page)),
        setErrorMessage: message => dispatch(setErrorMessageAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)