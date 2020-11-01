import React, {useState, useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import '../../styles/Compose.css';

import {setCurrentPageAction, setErrorMessageAction} from '../../reduxStore/actions/page'

const Compose = props => {

    const [html, setHTML] = useState()
    const [caretPos, setCaretPos] = useState(0)
    const [caretNode, setCaretNode] = useState(0)
    const textAreaEl = useRef()

    const getCaretPosition = shift => {
        console.log('-> get Caret position')

        if (window.getSelection && window.getSelection().getRangeAt) {
            var range = window.getSelection().getRangeAt(0);
            var selectedObj = window.getSelection();
            var childNodes = selectedObj.anchorNode.parentNode.childNodes;

            console.log('selectedObj.anchorNode', selectedObj.anchorNode)

            for (var i = 0; i < childNodes.length; i++) {
                if (childNodes[i] === selectedObj.anchorNode) {
                    console.log('childnode: ', i, childNodes[i])
                    console.log(
                        'nodeType: ',
                        childNodes[i].nodeType
                    )
                    // figured out node type is different for text
                    // and for span but coming out as if its the same
                    // on console of el it comes out as an object

                    setCaretNode(i)
                }
            }

            console.log('offset: ', range.startOffset)
            console.log('')

            setCaretPos(range.startOffset + shift)
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setCaret = () => {
        console.log('-> set Caret')
        var el = textAreaEl.current
        var range = document.createRange()
        var sel = window.getSelection()

        console.log(textAreaEl)
        console.log('el.childNodes[caretNode]: ', el.childNodes[caretNode])
        console.log('caretPos', caretPos)
        console.log('')

        range.setStart(el.childNodes[caretNode], caretPos)
        range.collapse(true)

        sel.removeAllRanges()
        sel.addRange(range)
    }

    useEffect(() => {
        // if textArea has childnodes setCaret
        // to position before re-render
        if(textAreaEl.current.childNodes.length>0){
            setCaret()
        }
    }, [html, setCaret])

    let shift = 0

    return (
        <div
            contentEditable = 'true'
            className = 'test'
            placeholder = 'type something here'
            ref = {textAreaEl}
            dangerouslySetInnerHTML={{__html: html}}
            onKeyUp = { e => {

                const inputText = textAreaEl.current.innerText

                // if @ or # should shift after re-rendering
                console.log(e.keyCode)
                if(e.keyCode === 51 || e.keyCode === 50){
                    shift -= 1
                }

                // composing final JSX
                let final = ''

                inputText.split(/\s+/).forEach( word => {
                    if(word.startsWith('#')){
                        final += `<span class='hashtag'>${word}</span> `
                    }
                    else if(word.startsWith('@')){
                        final += `<span class='mention'>${word}</span> `
                    }
                    else {
                        final += `${word} `
                    }
                })

                if(e.keyCode === 32 ){
                } else {
                    setHTML(final)
                    getCaretPosition(shift)
                }

            }
            }
        />
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