import React, {useState} from 'react';
import _ from 'lodash'
import {logInRequest} from '../utilities/Requests'
import '../../styles/LogIn.css';

import {connect} from 'react-redux'
import {setProfileAction} from '../../reduxStore/actions/profile'
import {setCurrentPageAction, setErrorMessageAction} from '../../reduxStore/actions/page'


const LogIn = props => {
    const {allUsers, setProfile, setCurrentPage, setErrorMessage} = props
    // const {addErrorMessage} = props
    const [loginInfo, setLoginInfo] = useState();

    const handleSubmit = async event =>{
        event.preventDefault()
        const everythingNotFilled = !loginInfo || !loginInfo.name || !loginInfo.password;

        if(everythingNotFilled){
            setErrorMessage('Error: You have to fill out both fields')
        } else {
            server_LogInRequest()
        }
    }

    const server_LogInRequest = async () => {
        const response = await logInRequest(loginInfo)
        if(typeof(response)=='string'){
            console.log(response)
            setErrorMessage(response)
        } else {
            console.log('Log in was successful')

            const userProfile = allUsers.find(user=> user._id === response._id)
            console.log('-> ', userProfile, response.token)
            // if(_.isEmpty(reduXprofile)){
                setProfile({...userProfile, token: response.token})
            // }

            setCurrentPage('posts');
            setErrorMessage(null)
            localStorage.setItem('storediD', response._id);
            localStorage.setItem('storedToken', response.token);
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
        setCurrentPage: page => dispatch(setCurrentPageAction(page)),
        setErrorMessage: message => dispatch(setErrorMessageAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)