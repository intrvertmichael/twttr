import React from 'react'

const Profile = props =>{
    if(!props.profile){
        return <div></div>
    }

    console.log(props.profile)
    return (
        <div className='profile'>
            <div style={{background:props.profile ? props.profile.color: 'red', height:'100px', width:'100px'}}/>
            <p>{props.profile ? props.profile._id: ''}</p>
            <p>{props.profile ? props.profile.name: ''}</p>
            <p>{''}</p>
        </div>
    )
}

export default Profile