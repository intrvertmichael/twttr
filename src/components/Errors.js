import React from 'react'
import '../styles/Errors.css'

const Errors = props => {
    return (
        <div className='errors' onClick={()=>props.addErrorMessage('')}>
            {props.errorMessage}
        </div>
    )
}

export default Errors;