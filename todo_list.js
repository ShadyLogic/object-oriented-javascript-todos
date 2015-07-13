var TodoList = function() {
	// ???
  this.tasks = [];

};

var Task = function(description){
  this.id = 0;
  this.description = description;
  this.completed = false;
  this.complete = function(){
    this.completed = true;
  }
}

TodoList.prototype.add = function(name){
  this.tasks.push(new Task(name));
  this.tasks[(this.tasks.length-1)].id = this.tasks.length;
}

TodoList.prototype.list = function(){
  for (var item in this.tasks) {
    console.log(this.tasks[item]);
  }
}

TodoList.prototype.remove = function(task){
  item_index = this.tasks.indexOf(task);
  this.tasks.splice(item_index);
}




// Driver code


// var todoList = newTodoList();

// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
