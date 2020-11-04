import React, {useState, useRef, useEffect} from 'react'
import {composeRequest} from '../utilities/Requests'
import '../../styles/HighlightedCompose.css';
import {connect} from 'react-redux'
import {setCurrentPageAction, setErrorMessageAction} from '../../reduxStore/actions/page'

const HighlightedCompose = props => {
    const {setCurrentPage, setErrorMessage} = props
    const {reduXprofile, allUsers} = props

    const [compose, setCompose] = useState('');

    const [hashtagTakingAction, setHashtagTakingAction] = useState(false)
    const [hashtagValue, setHashtagValue] = useState(null)

    const [mentionTakingAction, setMentionTakingAction] = useState(false)
    const [mentionValue, setMentionValue] = useState(null)

    const textAreaEl = useRef();
    const tweetLength = 120;

    const handleSubmit = async e =>{
        e.preventDefault()
        const correctLength = compose.trim().length > 5 && compose.trim().length < tweetLength

        if(correctLength){
            server_composeRequest()
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

    useEffect(()=>{
    if(hashtagValue){
        document.designMode = "on"
        for (let i = 0; i <= hashtagValue.length; i++) {
            document.execCommand("delete", false, "")
        }
        document.execCommand(
            "insertHTML",
            false,
            `<a href='/' class='hashtag'>${hashtagValue}</a>`
        );
        document.execCommand("insertText", false, " ")
        document.designMode = "off"

        setTimeout(() => { textAreaEl.current.focus() }, 0)
        setHashtagValue('')
        setHashtagTakingAction(false)
    }
    }, [hashtagValue])

    useEffect(()=>{
    if(mentionValue){
        document.designMode = "on"
        for (let i = 0; i <= mentionValue.length; i++) {
            document.execCommand("delete", false, "")
        }

        const userFound = allUsers.filter(user=> user.name === mentionValue.substring(1))
        const user = userFound[0]
        const exists = userFound.length > 0


        const userStyle = exists? `background:${user.color}`: ''

        document.execCommand(
            "insertHTML",
            false,
            `<a href='/' class='mention' style=${userStyle}>${mentionValue}</a>`
        );
        document.execCommand("insertText", false, " ")
        document.designMode = "off"

        setTimeout(() => { textAreaEl.current.focus() }, 0)
        setMentionValue(null)
        setMentionTakingAction(false)
    }
    }, [allUsers, mentionValue])


const handleKeyUp = e => {
    const container = textAreaEl.current

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // # HASHTAG
        if (e.keyCode === 51) { // #
            setHashtagTakingAction(true)
        } else if (hashtagTakingAction && e.keyCode === 8) { // backspace
            if(hashtagValue && hashtagValue.length === 1){
                setHashtagTakingAction(false)
            }
        } else if (hashtagTakingAction && e.keyCode === 32) { // space
            container.innerText.split(/\s+/).forEach((word) => {
                if (word.startsWith("#")) {
                    setHashtagValue(word)
                }
            })
        }

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // @ MENTION
        if (e.keyCode === 50) { // @
            setMentionTakingAction(true)
        } else if (mentionTakingAction && e.keyCode === 8) { // backspace
            if(mentionValue && mentionValue.length === 1){
                setMentionTakingAction(false)
            }
        } else if (mentionTakingAction && e.keyCode === 32) { // space
            container.innerText.split(/\s+/).forEach((word) => {
                if (word.startsWith("@")) {
                    setMentionValue(word)
                }
            })
        }

        setCompose(textAreaEl.current.innerText)
    }

    return (
        <div className='highlighted-compose'>
            <div
                contentEditable="true"
                ref={textAreaEl}
                class="highlighted-compose-textArea"
                placeholder="type something here..."
                onKeyUp={handleKeyUp}
            />

            <div className='btns'>
                <button
                    name="cancel"
                    className='submit'
                    onClick={e => {
                    e.preventDefault()
                    setErrorMessage(null)
                    setCurrentPage('posts')
                }}>
                    Cancel
                </button>

                <button type='submit' name="submit" className='submit' onClick={handleSubmit}>
                    Submit
                </button>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HighlightedCompose)