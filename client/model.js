import Cycle from "@cycle/core";

var todos = [
		{id:1, priority: 1, description: "Get groceries"},
		{id:2, priority: 1, description: "Clean out the Fridge"},
		{id:3, priority: 2, description: "Buy coffee filters"},
		{id:4, priority: 4, description: "Backup all my data"}
	];

let deleteTodo = function(todoId) {
	return todos.filter((d)=> d.id != todoId);
}

let model = function(events) {
	let todoListAfterDelete$ = events.deleteTodo$.map(deleteTodo);

	let model$ = Cycle.Rx.Observable
		.just(todos)
		.merge(todoListAfterDelete$);

	return model$;
}

export default model;