import React from 'react'
import {connect} from 'react-redux'
import {setCurrentPageAction, setErrorMessageAction} from '../../reduxStore/actions/page'
import {composeRequest} from '../utilities/Requests'

const Buttons = props => {
    const {setCurrentPage, setErrorMessage} = props     // from redux dispatch
    const {reduXprofile} = props                        // from redux state
    const {compose} = props                             // from parent

    const tweetLength = 120;

    const handleSubmit = async e =>{
        e.preventDefault()
        const correctLength = compose.trim().length > 5 && compose.trim().length < tweetLength

        if(correctLength){ server_composeRequest() }
        else { setErrorMessage('Error: Text is not the right length') }
    }

    const server_composeRequest = async () => {
        const response = await composeRequest({
            token : reduXprofile.token,
            payload : compose.trim()
        })

        if(response !== 'OK'){ setErrorMessage(response) }
        else {
            console.log('Post was created.')
            setCurrentPage('posts')
        }
    }

    return (
        <div className='btns'>
            <button
                name="cancel"
                className='submit'
                onClick={e => {
                e.preventDefault()
                setErrorMessage(null)
                setCurrentPage('posts')
                }}
            >
            Cancel
            </button>

            <button type='submit' name="submit" className='submit' onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        reduXprofile: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: page => dispatch(setCurrentPageAction(page)),
        setErrorMessage: message => dispatch(setErrorMessageAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)