import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
	name: 'posts',
	initialState: [],
	reducers: {
		addPost(state, action) {
			state.push({ id: state.length + 1, title: action.payload.title, body: action.payload.body })
		},
		deletePost(state, action) {
			const filteredPosts = state.filter(post => post.id !== action.payload)
			return filteredPosts.map((post, i) => {
				return { ...post, id: i + 1 }
			})
		},
		addAsyncPostsStarted(state) {

		},
		addAsyncPostsSucces(state, action) {
			const concated = state.concat(action.payload)
			return concated.map((post, i) => {
				return { ...post, id: i + 1 }
			})
		},
		addAsyncPostsError(state, action) {
			console.log(action.payload)
		},
	}
})

export const { addPost, deletePost, addAsyncPostsStarted, addAsyncPostsSucces, addAsyncPostsError } = postsSlice.actions

export const addAsyncPosts = () => {
	return dispatch => {
		dispatch(addAsyncPostsStarted())

		fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
			.then(res => res.json())
			.then(posts => {
				dispatch(addAsyncPostsSucces(posts))
			})
			.catch(err => {
				dispatch(addAsyncPostsError(err.message))
			})
	}
}

export default postsSlice.reducer