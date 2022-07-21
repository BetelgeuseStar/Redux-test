import { combineReducers } from '@reduxjs/toolkit'
import * as types from '../redux/types'
import postsSlice from './slices/postsSlice'

const todoReducer = (state = { items: [], filter: 'All' }, action) => {
	switch (action.type) {
		case types.ADD_TODO: return {
			...state,
			items: [
				...state.items, {
					id: state.items.length + 1,
					title: action.title,
					completed: false
				}
			]
		}
		case types.DELETE_TODO:
			let filteredItems = state.items.filter(item => item.id !== action.id)
			return {
				...state,
				items: filteredItems.map((item, i) => {
					return { ...item, id: i + 1 }
				})
			}
		case types.TOGGLE_TODO: return {
			...state,
			items: state.items.map(item => {
				if (item.id === action.id) {
					return { ...item, completed: !item.completed }
				}
				return item
			})
		}
		case types.ADD_ASYNC_TODOS_SUCCESS:
			let concated = state.items.concat(action.todos)
			return {
				...state,
				items: concated.map((item, i) => {
					return { ...item, id: i + 1 }
				})
			}
		case types.ADD_ASYNC_TODOS_ERROR:
			console.log(action.error)
			return state
		case types.SET_FILTER_TODO: return {
			...state,
			filter: action.filter
		}
		default: return state
	}
}


export default combineReducers({
	todo: todoReducer,
	posts: postsSlice,
})