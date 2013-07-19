function TodoCrtl($scope) {
	$scope.newTodo = null;

	$scope.addTodo = function(todo) {
		if (todo != null) {
			$scope.todos.push({text: todo, done:false});
			$scope.newTodo = null;
		}
	}

	$scope.markDone = function(todo) {
		todo.done = !todo.done;
	}

	$scope.todos = [
		{text:'Learn AngularJS', done:false},
		{text:'Go see Kimberly', done:false}
	];

}