import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

function PostList() {

	const posts = useSelector((state) => state.posts)

	return (
		<div className='postList'>
			{
				posts.length
					? posts.map(post => {
						return <Post key={post.id} {...post} />
					})
					: 'No posts...'
			}
		</div>
	)
}

export default PostList