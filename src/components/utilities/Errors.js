import React from 'react'
import '../../styles/Errors.css'
import {connect} from 'react-redux'
import {setErrorMessageAction} from '../../reduxStore/actions/page'

const Errors = props => {
    const {reduXerrorMessage, setErrorMessage} = props

    if(reduXerrorMessage){
        return (
            <div className='errors' onClick={()=> setErrorMessage(null)}>
                {reduXerrorMessage}
            </div>
        )
    } else {
        return <div></div>
    }
}

const mapStateToProps = state => {
    return {
        reduXerrorMessage: state.page.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setErrorMessage: message => dispatch(setErrorMessageAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Errors);