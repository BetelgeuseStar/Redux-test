import React, { useState } from 'react'

function TodoInterfaceComponent({ setFilter, addTodo, addAsyncTodos }) {

	const [inputValue, setInputValue] = useState('')

	return (
		<div className='TodoInterface'>
			<div className='TodoInterface__TodoCreator'>
				<input
					className='TodoInterface__input input'
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
				/>
				<div className='TodoInterface__buttons'>
					<button
						className='TodoInterface__btn btn'
						onClick={() => {
							if (inputValue.length) {
								addTodo(inputValue); setInputValue('')
							}
						}}
					>Add Todo</button>
					<button
						className='TodoInterface__btn btn'
						onClick={() => addAsyncTodos()}
					>Load todos async</button>
				</div>
			</div>
			<div className='TodoInterface__filter'>
				<h3 className='TodoInterface__title'>Show:</h3>
				<select
					defaultValue={'All'}
					onChange={(e) => setFilter(e.target.value)}
				>
					<option value="All">All</option>
					<option value="Completed">Completed</option>
					<option value="Active">Active</option>
				</select>
			</div>
		</div>
	)
}

export default TodoInterfaceComponent