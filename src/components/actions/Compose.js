import React, {useState, useRef} from 'react'
import {composeRequest} from '../utilities/Requests'
import '../../styles/Compose.css';
import {connect} from 'react-redux'
import {setCurrentPageAction, setErrorMessageAction} from '../../reduxStore/actions/page'

const Compose = props => {
    const {reduXprofile, setCurrentPage, setErrorMessage} = props
    const [compose, setCompose] = useState('');
    const textAreaEl = useRef();
    const tweetLength = 120;

    const handleSubmit = async e =>{
        e.preventDefault()
        const correctLength = compose.trim().length > 2 && compose.trim().length < tweetLength;

        if(correctLength){
            server_composeRequest();
        } else {
            setErrorMessage('Error: Text is not the right length')
        }
    }

    const server_composeRequest = async () => {
        const response = await composeRequest({
            token : reduXprofile.token,
            payload : compose.trim()
        })

        if(response !== 'OK'){
            setErrorMessage(response)
        }
        else {
            console.log('Post was created.')
            setCurrentPage('posts')
        }
    }


    return (
        <form className='composeForm' onSubmit={handleSubmit}>
            <textarea
                type='text'
                name="text"
                placeholder="Enter your message"
                ref={textAreaEl}
                onChange={ e => {
                    setCompose(e.target.value)
                    if(compose.trim().length>tweetLength){
                        textAreaEl.current.style.backgroundColor = "red";
                    } else {
                        textAreaEl.current.style.backgroundColor = "white";
                    }
                }}
            />
            <div className='btns'>
                <button name="cancel" className='submit' onClick={e => {
                    e.preventDefault()
                    setErrorMessage(null)
                    setCurrentPage('posts')
                }}>Cancel</button>
                <button type='submit' name="submit" className='submit'>Submit</button>
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
        setCurrentPage: page => dispatch(setCurrentPageAction(page)),
        setErrorMessage: message => dispatch(setErrorMessageAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compose)