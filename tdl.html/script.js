document.getElementById('todo-form').addEventListener('submit', function(e) {
	e.preventDefault();
	var newTodo = document.getElementById('new-todo');
	var todoList = document.getElementById('todo-list');
	var li = document.createElement('li');
	li.className = 'todo-item';
	li.innerHTML = '<input type="checkbox" class="checkbox">' +
		'<span class="todo-text">' + newTodo.value + '</span>' +
		'<button class="delete-button">Delete</button>';
	todoList.appendChild(li);
	newTodo.value = '';
});


document.getElementById('todo-list').addEventListener('click', function(e) {
	if (e.target.classList.contains('delete-button')) {
		var li = e.target.parentElement;
		li.parentNode.removeChild(li);
	}
});           
