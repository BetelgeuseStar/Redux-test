import React from 'react'
import TodoInterfaceContainer from '../containers/TodoInterfaceContainer'
import TodoListContainer from '../containers/TodoListContainer'

function TodoPage() {
	return (
		<div className='TodoPage'>
			<TodoInterfaceContainer />
			<TodoListContainer />
		</div>
	)
}

export default TodoPage