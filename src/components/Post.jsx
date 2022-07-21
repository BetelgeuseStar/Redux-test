import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/slices/postsSlice'

function Post({ id, title, body }) {

	const dispatch = useDispatch()

	return (
		<div className='post'>
			<h2 className='post__title'>{id + '. ' + title}</h2>
			<p className='post__body'>{body}</p>
			<button
				className='post__btn btn'
				onClick={() => dispatch(deletePost(id))}
			>delete</button>
		</div>
	)
}

export default Post