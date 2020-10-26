import React from 'react';
import _ from 'lodash'

import Post from './post/Post'
import '../styles/Posts.css';
import {connect} from 'react-redux'

const Posts = props => {
    const {allPosts, searchResults} = props
    const {addPost} = props

    let postsToShow = allPosts;
    if(searchResults) { postsToShow = searchResults }

    if(!_.isEmpty(postsToShow)){
        return (
            <ul>
            {
                postsToShow.slice(0).reverse().map(post => <Post
                        key={post._id}
                        {...{
                            post,
                            addPost
                        }}
                    />)
            }
            </ul>
            )
    } else {
            return (
                <div className='emptyPosts'>
                    <img src='https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif' alt='none found'/>
                    <p>Unfortunately there are no posts</p>
            </div>)
    }

}

const mapStateToProps = state => {
    return {
        allPosts:state.mongoDb.allPosts,
        searchResults:state.page.searchResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)