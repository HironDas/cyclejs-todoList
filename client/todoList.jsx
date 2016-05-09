//@jsx cycleDom.hjsx
import Cycle from '@cycle/core';
import CycleDom from '@cycle/dom';

let todoList = function(todos$){
	let renderTodo = function(todo){
		return (
			<tr key ={todo.id}>
				<td>{todo.priority}</td>
				<td>{todo.description}</td>
				<td><button className = "btn btn-danger btn-xs">Delete</button></td>
			</tr>

		);
	};

	let view$ = todos$.map(todos => {
		return (
			<div>
				<div>Todo List:</div>
				<table>
					<thead>
						<tr>
							<th>Priority</th>
							<th>Description</th>
							<th>Action </th>
						</tr>
					</thead>
					<tbody>
						{todos.map((el) => renderTodo(el))}
					</tbody>
				</table>
			</div>
		);
	});

	return {
		DOM: view$
	};

};

export default todoList;