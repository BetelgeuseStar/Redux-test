import React from 'react'
import PostsInterface from '../components/PostsInterface'
import PostList from '../components/PostsList'

function PostsPage() {
	return (
		<div className='PostsPage'>
			<PostsInterface />
			<PostList />
		</div>
	)
}

export default PostsPage