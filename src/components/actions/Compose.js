import React, {useState, useRef} from 'react'
import {composeRequest} from '../utilities/Requests'
import '../../styles/Compose.css';
import {connect} from 'react-redux'
import {setCurrentPageAction, setErrorMessageAction} from '../../reduxStore/actions/page'

const Compose = props => {
    const {reduXprofile, setCurrentPage, setErrorMessage, allUsers} = props
    const [compose, setCompose] = useState(' ');
    const tweetLength = 120;


    const handleTextAreaKey = e => {
        setCompose(compose + e.target.value)
    }

    const [html, setHTML] = useState()
    const [wordLength, setwordLength] = useState(0);
    const textAreaEl = useRef();

    return (
        <div
            contentEditable = 'true'
            className = 'test'
            placeholder = 'type something here'
            ref = {textAreaEl}
            onKeyUp = { e => {
                textAreaEl.current.focus()
                const inputText = textAreaEl.current.innerText

                const arr = inputText.split(' ').map(word=> {
                    if(word.startsWith('#')){
                        return (
                        <div>
                        <button>{word}</button>
                        <span> </span>
                        </div>
                        )
                    }
                    else {
                        return `${word} `
                    }
                })

                console.log(arr)

                const info = <p> {arr} </p>
                console.log(info)
                setHTML('')
                setHTML(info)
            }
            }
        >
        {html}
        </div>
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