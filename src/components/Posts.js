import React from 'react';
import {connect} from 'react-redux'
import Post from './Post'

function Posts({syncPosts}) {
    if(!syncPosts.length){
        return <p className='text-center'> Постов пока нет</p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = state => {
    console.log(state);
    return {
        syncPosts: state.posts.post
    }
}

export default connect(mapStateToProps, null)(Posts)
