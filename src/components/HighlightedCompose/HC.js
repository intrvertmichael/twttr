import React, {useState} from 'react'
import TextArea from './HC-textArea'
import Buttons from './HC-buttons'
import Suggestions from './HC-suggestions'

const HighlightedCompose = props => {
    const [compose, setCompose] = useState('')
    const [suggested, setSuggested] = useState([])

    const suggestionExists = suggested && suggested.length > 0;

    return (
        <div className='highlighted-compose'>
            {
            suggestionExists?
            <Suggestions {...{compose, suggested}} /> : ''
            }
            <TextArea {...{setCompose, setSuggested}} />
            <Buttons {...{compose}} />
        </div>
    )
}

export default HighlightedCompose