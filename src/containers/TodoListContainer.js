import TodoListComponent from '../components/TodoListComponent'
import { connect } from 'react-redux'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'All': return todos
		case 'Completed': return todos.filter(todo => todo.completed)
		case 'Active': return todos.filter(todo => !todo.completed)
		default: return todos
	}
}

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todo.items, state.todo.filter)
	}
}



export default connect(mapStateToProps)(TodoListComponent)