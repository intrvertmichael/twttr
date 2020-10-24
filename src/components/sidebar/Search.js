import React, {useState} from 'react'
import {searchRequest} from '../utilities/Requests'

const Search = props => {
    const [searchText, setSearchText] = useState('');

    const {server_GetPostsRequest, addErrorMessage, allPosts, addPost} = props

    const handleSearch = async e =>{
        e.preventDefault()

        if(searchText === ''){
            server_GetPostsRequest()
        } else {
            const response = await searchRequest({
                payload : searchText.toLowerCase()
            })

            if(typeof response === 'string'){
                console.log(response)
                addErrorMessage(response)
            } else {
                addErrorMessage('')

                const final = allPosts.filter(post => {
                    for(let i=0; i<response.length; i++){
                        if (response[i] === post._id){
                            return post
                        }
                    }
                })

                addPost(final)
            }
        }
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type='text'
                name='search'
                placeholder="Search for Hashtag here"
                onChange = {text =>{
                    setSearchText(text.target.value)
                }}
                value={searchText}
            />
        </form>
    )
}

export default Search