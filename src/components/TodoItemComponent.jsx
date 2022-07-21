import React from 'react'

function TodoItemComponent({ id, title, completed, deleteTodoItem, toggleTodoItem }) {
	return (
		<div
			className='TodoItem'
			onClick={() => toggleTodoItem(id)}
		>
			<span className='TodoItem__main'>
				<strong className='TodoItem__id'>{id + '.'}</strong>
				<span
					className='TodoItem__title'
					style={{ textDecoration: completed ? 'line-through' : 'none' }}
				>{title}</span>
			</span>
			<button
				className='TodoItem__delete btn'
				onClick={(e) => { deleteTodoItem(id); e.stopPropagation() }}
			>
				delete
			</button>
		</div>
	)
}

export default TodoItemComponent