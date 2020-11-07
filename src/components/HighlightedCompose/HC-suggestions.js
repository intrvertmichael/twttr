import React from 'react'

const Suggestions = props => {
    const {suggested} = props

    return (
        <div className='suggestions'>
            <li>Maybe:</li> {suggested.map( user => <li>@{user.name}</li> )}
        </div>
    )
}

export default Suggestions