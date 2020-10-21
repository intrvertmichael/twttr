import React, {useState, useRef} from 'react'
import {composeRequest} from '../utilities/Requests'
import '../../styles/Compose.css';

const Compose = props => {
    const {profile, changeCurrentPage, addErrorMessage} = props
    const [compose, setCompose] = useState('');
    const textAreaEl = useRef();
    const tweetLength = 120;

    const handleSubmit = async e =>{
        e.preventDefault()
        const correctLength = compose.trim('').length > 2 && compose.trim('').length < tweetLength;

        if(correctLength){
            server_composeRequest();
        } else {
            addErrorMessage('Error: Text is not the right length')
        }
    }

    const server_composeRequest = async () => {
        const response = await composeRequest({
            token : profile.token,
            payload : compose
        })

        if(response !== 'OK'){
            addErrorMessage(response)
        }
        else {
            console.log('Post was created.')
            changeCurrentPage('posts')
        }
    }

    return (
        <form className='composeForm' onSubmit={handleSubmit}>
            <textarea
                type='text'
                name="text"
                placeholder="Enter your message"
                ref={textAreaEl}
                onChange={(e)=> {
                    setCompose(e.target.value.trim())
                    if(compose.trim('').length>tweetLength){
                        textAreaEl.current.style.backgroundColor = "red";
                    } else {
                        textAreaEl.current.style.backgroundColor = "white";
                    }
                }}
            />
            <div className='btns'>
                <button name="cancel" className='submit' onClick={e => {
                    e.preventDefault()
                    changeCurrentPage('posts')
                }}>Cancel</button>
                <button type='submit' name="submit" className='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Compose;