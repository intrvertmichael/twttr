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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// FORMATTING HASHTAG AND MENTION IN TEXT AREA
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // HASHTAG
    useEffect(()=>{
        if(hashtagValue){
            document.designMode = "on"
            for (let i = 0; i <= hashtagValue.length + 1 ; i++) {
                document.execCommand("delete", false, "")
            }
            document.execCommand(
                "insertHTML",
                false,
                `<a href='/' class='hashtag'>#${hashtagValue}</a>`
            );
            document.execCommand("insertText", false, " ")
            document.designMode = "off"

            setTimeout(() => { textAreaEl.current.focus() }, 0)
            setHashtagValue('')
            setHashtagTakingAction(false)
        }
    }, [hashtagValue])

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // MENTION
    useEffect(()=>{
        if(mentionValue){
            document.designMode = "on"
            for (let i = 0; i <= mentionValue.length + 1 ; i++) {
                document.execCommand("delete", false, "")
            }

            const userFound = allUsers.filter(user=> user.name === mentionValue)
            const user = userFound[0]
            const exists = userFound.length > 0


            const userStyle = exists? `background:${user.color}`: ''

            document.execCommand(
                "insertHTML",
                false,
                `<a href='/' class='mention' style=${userStyle}>@${mentionValue}</a>`
            );
            document.execCommand("insertText", false, " ")
            document.designMode = "off"

            setTimeout(() => { textAreaEl.current.focus() }, 0)
            setMentionValue(null)
            setMentionTakingAction(false)
        }
    }, [allUsers, mentionValue])



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// SUGGESTIONS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    const [mentionHash, setMentionHash] = useState('')

    useEffect(()=>{

        // console.log(mentionHash)

        if(mentionTakingAction && mentionHash.length>0 && allUsers){
            const possible = allUsers.filter( user => user.name.startsWith(mentionHash))
            console.log(possible)
            setSuggested(possible)
        }

        else {
            setSuggested(null)
        }

    }, [allUsers, mentionHash, mentionTakingAction, setSuggested])




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// HANDLING KEY UP
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    const handleKeyUp = e => {

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // # HASHTAG
        if (e.keyCode === 51) { // #
            setHashtagTakingAction(true)
        } else if (
            hashtagTakingAction &&
            e.keyCode === 8 &&
            hashtagValue &&
            hashtagValue.length === 1
            ) { // backspace
                setHashtagTakingAction(false)
                setHashtagValue(null)
                setSuggested(null)
                setMentionHash('')

        } else if (hashtagTakingAction && e.key.match(/\s+/)) { // space
            setHashtagValue(mentionHash)
            setSuggested(null)
            setMentionHash('')
        } else if (hashtagTakingAction) { // while hashtag is being written
            if(e.keyCode === 8){ // backspace
                setMentionHash(mentionHash.slice(0, -1))
            } else {
                const letter = e.key.toLowerCase()
                const isLetter =  letter.match(/[a-z]/i)

                if(
                    isLetter &&
                    e.keyCode !== 16 &&
                    e.keyCode !== 16 && // is not shift
                    e.keyCode !== 91 && // is not meta/command
                    e.keyCode !== 37 && // is not left
                    e.keyCode !== 38 && // is not up
                    e.keyCode !== 39 && // is not right
                    e.keyCode !== 40    // is not down
                    ){
                    setMentionHash(mentionHash + letter)
                }

                else if(
                    e.keyCode === 16 || // is shift
                    e.keyCode === 37 || // is left
                    e.keyCode === 38 || // is up
                    e.keyCode === 39 || // is right
                    e.keyCode === 40    // is down
                    ) { } // do nothing

                else {
                    setMentionTakingAction(false)
                    setSuggested(null)
                    setMentionHash('')
                    setHashtagValue(null)
                }
            }
        }


        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // @ MENTION
        if (e.keyCode === 50) { // @
            setMentionTakingAction(true)
        }

        else if (
            mentionTakingAction &&
            e.keyCode === 8 &&
            mentionValue &&
            mentionValue.length === 1
            ) { // backspace
            setMentionTakingAction(false)
            setMentionValue(null)
            setSuggested(null)
            setMentionHash('')
        }

        else if (mentionTakingAction && e.key.match(/\s+/)) { // space
            setMentionValue(mentionHash)
            setSuggested(null)
            setMentionHash('')
        }

        else if (mentionTakingAction) { // while mention is being written

            if(e.keyCode === 8){ // backspace
                setMentionHash(mentionHash.slice(0, -1))
            } else {
                const letter = e.key.toLowerCase()
                const isLetter =  letter.match(/[a-z]/i)

                if(
                    isLetter &&
                    e.keyCode !== 16 && // is not shift
                    e.keyCode !== 91 && // is not meta/command
                    e.keyCode !== 37 && // is not left
                    e.keyCode !== 38 && // is not up
                    e.keyCode !== 39 && // is not right
                    e.keyCode !== 40    // is not down
                    ){
                    setMentionHash(mentionHash + letter)
                }

                else if(
                    e.keyCode === 16 || // is shift
                    e.keyCode === 37 || // is left
                    e.keyCode === 38 || // is up
                    e.keyCode === 39 || // is right
                    e.keyCode === 40    // is down
                    ) { } // do nothing

                else {
                    setMentionTakingAction(false)
                    setSuggested(null)
                    setMentionHash('')
                    setMentionValue(null)
                }
            }
        }
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


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