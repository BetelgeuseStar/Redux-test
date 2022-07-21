import { connect } from 'react-redux'
import TodoInterfaceComponent from '../components/TodoInterfaceComponent'
import { setFilterTodo, addTodo, addAsyncTodos } from '../redux/actions'


const mapDispatchToProps = {
	setFilter: setFilterTodo,
	addTodo,
	addAsyncTodos
}

export default connect(null, mapDispatchToProps)(TodoInterfaceComponent)