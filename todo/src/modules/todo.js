class Todo {

  // Create a task and then push in to array of tasks?  
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  // setDescription(description) {
  //   this.description = description;
  // }
}



// let task1 = new Todo('title');
// console.log(task1)
// task1 = new Todo('titlsssses');
// console.log(task1)
// task1.setDescription('description')
// console.log(task1)

export { 
  Todo
}