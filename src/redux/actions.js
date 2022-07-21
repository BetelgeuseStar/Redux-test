import * as types from '../redux/types'

export const addTodo = (title) => {
	return {
		type: types.ADD_TODO,
		title
	}
}

export const deleteTodo = (id) => {
	return {
		type: types.DELETE_TODO,
		id
	}
}

export const toggleTodo = (id) => {
	return {
		type: types.TOGGLE_TODO,
		id
	}
}

export const setFilterTodo = (filter) => {
	return {
		type: types.SET_FILTER_TODO,
		filter
	}
}

export const addAsyncTodosStarted = () => {
	return {
		type: types.ADD_ASYNC_TODOS_STARTED
	}

}

export const addAsyncTodosSucces = (todos) => {
	return {
		type: types.ADD_ASYNC_TODOS_SUCCESS,
		todos
	}
}

export const addAsyncTodosError = (error) => {
	return {
		type: types.ADD_ASYNC_TODOS_ERROR,
		error
	}
}

export const addAsyncTodos = () => {
	return dispatch => {
		dispatch(addAsyncTodosStarted())

		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(res => res.json())
			.then(todos => {
				dispatch(addAsyncTodosSucces(todos))
			})
			.catch(err => {
				dispatch(addAsyncTodosError(err.message))
			})

	}
}