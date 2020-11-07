import React from 'react';
import _ from 'lodash'

import Post from './post/Post'
import '../styles/Posts.css';
import {connect} from 'react-redux'
import {setSearchResultsAction, setSearchAction} from '../reduxStore/actions/page'

const Posts = props => {
    const {allPosts, searchResults} = props
    const {setSearchResults, setSearch, searchText} = props
    const {addPost} = props

    let postsToShow = allPosts;
    if(searchResults) { postsToShow = searchResults }

    if(!_.isEmpty(postsToShow) && typeof postsToShow !=='string'){
        return (
            <ul>

            {
                searchResults?
                <div className='clear-page' onClick={()=>{
                    setSearch(null)
                    setSearchResults(null)
                    }}>
                    {
                    searchText?
                    `Clear Search for ${searchText}` :
                    `Clear Search`
                    }
                </div> : ''
            }

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
                    {/* <img src='https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif' alt='none found'/> */}
                    <p>Unfortunately there are no posts</p>
            </div>)
    }

}

const mapStateToProps = state => {
    return {
        allPosts: state.mongoDb.allPosts,
        searchResults: state.page.searchResults,
        searchText: state.page.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchResults: results => dispatch(setSearchResultsAction(results)),
        setSearch: results => dispatch(setSearchAction(results))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)