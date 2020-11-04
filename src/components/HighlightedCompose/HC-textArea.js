import React, {useState, useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import '../../styles/HighlightedCompose.css';

const TextArea = props => {
    const {setCompose, setSuggested} = props  // from parent
    const {allUsers} = props    // from redux

    const [hashtagTakingAction, setHashtagTakingAction] = useState(false)
    const [mentionTakingAction, setMentionTakingAction] = useState(false)

    const [hashtagValue, setHashtagValue] = useState(null)
    const [mentionValue, setMentionValue] = useState(null)

    const textAreaEl = useRef();

    // hashtag
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

    // mention
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

    const [mentionHash, setMentionHash] = useState('')
    useEffect(()=>{
        console.log(mentionHash)
        if(mentionHash.length>0 && allUsers){
            const possible = allUsers.filter( user => user.name.startsWith(mentionHash))
            console.log(possible)
            setSuggested(possible)
        } else {
            setSuggested(null)
        }
    }, [allUsers, mentionHash, setSuggested])

    const handleKeyUp = e => {
        const container = textAreaEl.current

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // # HASHTAG
        if (e.keyCode === 51) { // #
            setHashtagTakingAction(true)
        } else if (hashtagTakingAction && e.keyCode === 8 && hashtagValue && hashtagValue.length === 1) { // backspace

                setHashtagTakingAction(false)
                setHashtagValue(null)
                setSuggested(null)
                setMentionHash('')

        } else if (hashtagTakingAction && e.keyCode === 32) { // space
            container.innerText.split(/\s+/).forEach((word) => {
                if (word.startsWith("#")) { setHashtagValue(word) }
            })
            setSuggested(null)
            setMentionHash('')
        } else if (hashtagTakingAction) { // while hashtag is being written
            // setSuggested(e.key)
        }

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // @ MENTION
        if (e.keyCode === 50) { // @
            setMentionTakingAction(true)
        } else if (mentionTakingAction && e.keyCode === 8 && mentionValue && mentionValue.length === 1) { // backspace

            setMentionTakingAction(false)
            setMentionValue(null)
            setSuggested(null)
            setMentionHash('')

        } else if (mentionTakingAction && e.keyCode === 32) { // space
            container.innerText.split(/\s+/).forEach((word) => {
                if (word.startsWith("@")) {
                    setMentionValue(word)
                }
                setSuggested(null)
                setMentionHash('')
            })
        } else if (mentionTakingAction) { // while mention is being written

            if(e.keyCode === 8){
                setMentionHash(mentionHash.slice(0, -1))
            } else {
                const isLetter =  /^[a-zA-Z0-9_.-]*$/.test(e.key.toLowerCase())
                if(isLetter && e.keyCode !== 16){ // is  letter and not shift
                    const letter = e.key;
                    setMentionHash(mentionHash + letter)
                }
            }
        }

        setCompose(textAreaEl.current.innerText)
    }

    return (
        <div
            contentEditable="true"
            ref={textAreaEl}
            class="highlighted-compose-textArea"
            placeholder="type something here..."
            onKeyUp={handleKeyUp}
        />
    )
}


const mapStateToProps = state => {
    return {
        allUsers: state.mongoDb.allUsers
    }
}

export default connect(mapStateToProps)(TextArea)