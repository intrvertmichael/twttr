import React, {useEffect, useState} from 'react'
import {searchRequest} from '../utilities/Requests'
import {connect} from 'react-redux'
import {setErrorMessageAction, setSearchAction, setSearchResultsAction} from '../../reduxStore/actions/page'

const Search = props => {
    const {setErrorMessage, setSearch, search, allPosts, setSearchResults} = props

    const [SearchInputText, setSearchInputText] = useState()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getSearchResults = async searchText => {
        console.log(`Searching for posts with ${searchText} hashtag`)
        const response = await searchRequest({
            payload : searchText.toLowerCase()
        })

        if(typeof response === 'string'){
            console.log(response)
            setErrorMessage(response)
        } else {
            setErrorMessage(null)

            // eslint-disable-next-line array-callback-return
            const final = allPosts.filter(post => {
                for(let i=0; i<response.length; i++){
                    if (response[i] === post._id){
                        return post
                    }
                }
            })

            setSearchResults(final)
        }
    }

    useEffect(()=>{
        if(search === ''){
            setSearch(null)
            setSearchResults(null)
        } else if(search) {
            getSearchResults(search)
        }
    }, [getSearchResults, search, setSearch, setSearchResults])

    const handleSearch = async e =>{
        e.preventDefault()
        console.log(`search submitted ${SearchInputText}`)
        setSearch(SearchInputText)
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type='text'
                name='search'
                placeholder="Search for Hashtag here"
                onChange = {text =>{
                    setSearchInputText(text.target.value)
                }}
                value={SearchInputText}
            />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        allPosts: state.mongoDb.allPosts,
        search: state.page.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setErrorMessage: message => dispatch(setErrorMessageAction(message)),
        setSearch: text => dispatch(setSearchAction(text)),
        setSearchResults: payload => dispatch(setSearchResultsAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)