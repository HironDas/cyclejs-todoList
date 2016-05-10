let events = function(DOM) {
	let deleteTodo$ = DOM.select('button.deleteTodo').events('click')
		.map((evt)=>
			parseInt(evt.target.dataset.todoId, 10); 
		);

	return { deleteTodo$ };
};

export default events;