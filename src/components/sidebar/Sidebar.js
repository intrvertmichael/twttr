import React from 'react'
import _ from 'lodash'
import '../../styles/Sidebar.css';
import Search from './Search'
import {connect} from 'react-redux'
import {FaTwitter} from 'react-icons/fa'
import {removeProfileAction} from '../../reduxStore/actions/profile'
import {setCurrentPageAction, setErrorMessageAction, setSearchAction, setSearchResultsAction} from '../../reduxStore/actions/page'

const Sidebar = props =>{
    const {reduXprofile, reduXcurrentPage} = props
    const {removeProfile, setCurrentPage, setSearch, setSearchResults, setErrorMessage} = props


    const handleLogoClick = e =>{
        e.preventDefault()
        setSearch(null)
        setSearchResults(null)
        setErrorMessage(null)
        setCurrentPage('posts')
    }

    const twitterLogo = <div className='page-logo' onClick={handleLogoClick}> <FaTwitter/> </div>
    const searchField = <Search />


    // if not logged in and posts page
    // show login/register button
    if( _.isEmpty(reduXprofile) &&
        (reduXcurrentPage==='posts' || reduXcurrentPage==='single-page')
    ){
        return (
        <>
            {twitterLogo}
            <button className="register-btn" onClick={()=>setCurrentPage('register') }> Register </button>
            <button className="login-btn" onClick={()=>setCurrentPage('log-in')}>Log In </button>
            {searchField}
        </>
        )
    }

    // if login, register, or compose
    // show current page label
    else if(
        reduXcurrentPage==='log-in'||
        reduXcurrentPage==='register'||
        reduXcurrentPage==='compose'
        ){
        return(
        <>
            {
            reduXcurrentPage!=='compose'?
            twitterLogo :
            <div
                className='profile-name compose-profile-name'
                onClick={handleLogoClick}
                style={{background: reduXprofile.color}}
            >
            {reduXprofile.name}
            </div>
            }
            <div className="page-label">
            {reduXcurrentPage==='log-in'? 'Log In': reduXcurrentPage}
            </div>
        </>
        )
    }

    // else person is logged in
    // so show the profile on the page
    // with logout and compose button
    else{
        return (
        <div className='profile'>
            <div
                className='profile-name'
                onClick={handleLogoClick}
                style={{background: reduXprofile.color}}
            >
            {reduXprofile.name}
            </div>

        <button onClick={()=>setCurrentPage('compose')}> Compose </button>

        <button onClick={()=>{
            console.log('Logged out.')
            removeProfile()
            localStorage.removeItem('storediD');
            localStorage.removeItem('storedToken');
            setErrorMessage('You are now logged out. Hope to see you again soon.')
            setCurrentPage('posts')
            }}> Log Out</button>

            {searchField}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allUsers: state.mongoDb.allUsers,
        reduXprofile: state.profile,
        reduXcurrentPage: state.page.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeProfile: () => dispatch(removeProfileAction()),
        setCurrentPage: page => dispatch(setCurrentPageAction(page)),
        setSearch: text => dispatch(setSearchAction(text)),
        setSearchResults: payload => dispatch(setSearchResultsAction(payload)),
        setErrorMessage: message => dispatch(setErrorMessageAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)