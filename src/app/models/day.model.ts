export class Day {
  tasks: Task[] = [];

  addTask(description: string, priority: string) {
    const task = new Task(description, priority);
    this.tasks.push(task);
  }
}

// let tasks: Task[] = [];
// tasks.push(new Task('Do the dishes.', 'Medium'));
// tasks.push(new Task('Buy chocolate.', 'Low'));
// tasks.push(new Task('Do the laundry.', 'High'));
//
// tasks[0].markDone();
//
// for (let task of tasks) {
//   console.log(task);
// }
