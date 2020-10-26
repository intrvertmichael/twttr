import React from 'react'
import {connect} from 'react-redux'

import Post from '../post/Post'
const SinglePage = props => {
    const {singlePost} = props
    return (
        <div>
            <Post post={singlePost} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        singlePost: state.page.singlePost
    }
}

export default connect(mapStateToProps)(SinglePage)