import React from 'react';

const Posts = props => {
    return (
        <ul>
            { props.posts? props.posts.map( post => {
                return (
                <li key={post._id}> 
                <h3>{post.name}</h3>
                <p>{post.payload}</p>
                </li>)
            }) : 'no posts yet' }
        </ul>
    )
}

export default Posts;