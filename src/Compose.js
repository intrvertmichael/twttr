import React, {useState, useRef} from 'react'
import {composeRequest} from './Requests'

const Compose = props => {
    const [compose, setCompose] = useState('');
    const textAreaEl = useRef();

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(compose)
        if(compose.trim('').length>2 && props.profile){
            composeRequest({
                token:props.profile.token,
                payload:compose
            })
        } else {
            console.log('either the text is too short or theres no profile')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                type='text'
                name="text"
                placeholder="Enter your message"
                ref={textAreaEl}
                onChange={(e)=> {
                    setCompose(e.target.value.trim())
                    if(compose.trim('').length>21){
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