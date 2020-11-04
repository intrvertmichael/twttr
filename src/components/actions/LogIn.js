import React, {useState} from 'react';
import '../../styles/LogIn.css';

import {connect} from 'react-redux'
import {setProfileAction, logInAction} from '../../reduxStore/actions/profile'
import {setCurrentPageAction, setErrorMessageAction} from '../../reduxStore/actions/page'


const LogIn = props => {
    const {setCurrentPage, setErrorMessage, logInRequest} = props
    const [loginInfo, setLoginInfo] = useState();

    const handleSubmit = event =>{
        event.preventDefault()
        const everythingNotFilled = !loginInfo || !loginInfo.name || !loginInfo.password;

        if(everythingNotFilled){
            setErrorMessage('Error: You have to fill out both fields')
        }
        else {
			setErrorMessage(null)
            logInRequest(loginInfo)
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
                <button className='btns' onClick={()=> {
                    setErrorMessage(null)
                    setCurrentPage('posts')
                    }}> Cancel </button>
                <button className='btns submit' type="submit">Submit</button>
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
        logInRequest: profile => dispatch(logInAction(profile)),
        setCurrentPage: page => dispatch(setCurrentPageAction(page)),
        setErrorMessage: message => dispatch(setErrorMessageAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)