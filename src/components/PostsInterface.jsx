import React, { useState } from 'react'
import { addAsyncPosts, addPost } from '../redux/slices/postsSlice'
import { useDispatch } from 'react-redux'

function PostsInterface() {

	const dispatch = useDispatch()
	const [titleValue, setTitleValue] = useState('')
	const [bodyValue, setBodyValue] = useState('')

	const addPostHandler = () => {
		if (titleValue.length && bodyValue.length) {
			dispatch(addPost({ title: titleValue, body: bodyValue }))
			setTitleValue('')
			setBodyValue('')
		}
	}

	return (
		<div className='PostsInterface'>
			<div className='PostsInterface__top'>
				<h2 className='PostsInterface__title'>Title</h2>
				<input
					type="text"
					className='input PostsInterface__titleInput'
					value={titleValue}
					onChange={(e) => setTitleValue(e.target.value)}
				/>
				<button
					className='PostsInterface__btn btn'
					onClick={() => addPostHandler()}
				>Publish</button>
				<button
					className='PostsInterface__asyncBtn btn'
					onClick={() => dispatch(addAsyncPosts())}
				>Load posts async</button>
			</div>
			<div className='PostsInterface__bot'>
				<h2 className='PostsInterface__title'>Body</h2>
				<textarea
					type="text"
					className='input PostsInterface__bodyInput'
					value={bodyValue}
					onChange={(e) => setBodyValue(e.target.value)}
				/>
			</div>

		</div>
	)
}

export default PostsInterface