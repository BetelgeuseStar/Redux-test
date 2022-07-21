import TodoItemComponent from "../components/TodoItemComponent";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";


const mapDispatchToProps = {
	deleteTodoItem: deleteTodo,
	toggleTodoItem: toggleTodo
}

export default connect(null, mapDispatchToProps)(TodoItemComponent)
