import React from 'react'
import {connect} from 'react-redux'
import {FaRegCommentAlt} from 'react-icons/fa'
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import {setSearchAction, setCurrentPageAction, setSinglePostAction, getUserPostsAction} from '../../reduxStore/actions/page'
import {updateAllPostsAction} from '../../reduxStore/actions/mongoDb'

const Post = props => {
    const {setSearch, allUsers, reduXprofile, setCurrentPage, setSinglePost, currentPage, getUserPosts} = props
    const {post} = props

    let authorProfile

    if(allUsers && post){
        authorProfile = allUsers.find(user => user._id === post.authorId)
    }

    if(!authorProfile){
        authorProfile = {
            name:'User no longer exists',
            color: 'red'
        }
    }


    const getFinalText = (postText, allUsers) => {
        return (
            <>
            {postText.split(/\s+/).map(word => {

                if(word.startsWith('#')){
                    return (
                        <button
                            onClick={()=>hashtagClick(word)}
                            className='hashtag'
                        >
                        {word}
                        </button>)
                }
                else if(word.startsWith('@')){
                    const mentioned = allUsers.find(user=> user.name === word.toLowerCase().substring(1))

                    let style={}

                    if(mentioned){
                        style = {background:mentioned.color, color: 'black'}
                    }

                    return (
                        <button
                            style={style}
                            className='hashtag'
                            onClick={()=>{
                                getUserPosts(mentioned._id)
                                if(currentPage !== 'posts'){
                                    setCurrentPage('posts')
                                }
                            }}
                        >
                        {word}
                        </button>)
                }

                else {
                    return word + ' '
                }
            })}
            </>
        )
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const postClick = async () => {
        await setSinglePost(post._id)
        setCurrentPage('single-page')
    }

    const hashtagClick = hashtag => {
        setCurrentPage('posts')
        setSinglePost(null)
        setSearch(hashtag)
    }

    return (
    <li className='post'>
        <div className='post-header'>
            <div
                className='info-name'
                onClick={()=>{
                    getUserPosts(authorProfile._id)
                    if(currentPage !== 'posts'){
                        setCurrentPage('posts')
                    }
                }}
                >
                <div
                    className='icon-color'
                    style={{background:authorProfile.color}}
                />
                <h3>{authorProfile.name}</h3>
            </div>
            <div className='like-comment-icons'>
            {
            currentPage==='posts'?
            <el onClick={postClick} className='comments'>
                <label> {post.comments?post.comments.length:0} </label>
                <FaRegCommentAlt className='commentbox'/>
            </el> : ''
            }
            <LikeButton post={post} />
            </div>
        </div>

        <div className='post-body'>
            <p className='text'>{getFinalText(post.payload, allUsers)}</p>
        </div>

        <div className='post-footer'>
            <div className='date-comments'>
                <p className='date'>{getFullDate(post.date)}</p>
            </div>
            {
            reduXprofile && reduXprofile._id === post.authorId?
            <DeleteButton post={post} /> : ''
            }

        </div>
    </li>
    )
}

const getFullDate = (postDate) => {
    const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const d = new Date(postDate)
    const date =`${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    const timeHours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
    const timeMinutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
    const ampm = d.getHours() >= 12 ? 'pm' : 'am';
    return `${date} | ${timeHours}:${timeMinutes} ${ampm}`
}

const mapStateToProps = state => {
    return {
        allPosts: state.mongoDb.allPosts,
        allUsers: state.mongoDb.allUsers,
        reduXprofile: state.profile,
        currentPage: state.page.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearch: text => dispatch(setSearchAction(text)),
        getUserPosts: authorId => dispatch(getUserPostsAction(authorId)),
        setCurrentPage: page => dispatch(setCurrentPageAction(page)),
        updateAllPosts: () => dispatch(updateAllPostsAction()),
        setSinglePost: postId => dispatch(setSinglePostAction(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)