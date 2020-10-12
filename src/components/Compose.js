import React, {useState, useRef} from 'react'
import {composeRequest} from './Requests'
import '../styles/Compose.css';

const Compose = props => {
    const [compose, setCompose] = useState('');
    const textAreaEl = useRef();
    const tweetLength = 280;

    const handleSubmit = async e =>{
        e.preventDefault()
        if(compose.trim('').length>2 && compose.trim('').length<tweetLength &&props.profile){
            const res = await composeRequest({
                token:props.profile.token,
                payload:compose
            })
            console.log(res)
            props.changeCurrentPage('posts')
        } else {
            console.log('either the text is too short or theres no profile')
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

            <input type='submit' name="submit"/>
        </form>
    )
}

export default Compose;