import React from 'react'
import TodoItemContainer from '../containers/TodoItemContainer'

function TodoListComponent({ todos }) {
	return (
		<div className='TodoList'>
			{todos.length
				? todos.map(todo => {
					return <TodoItemContainer key={todo.id} {...todo} />
				})
				: "No todos..."
			}
		</div>
	)
}

export default TodoListComponent