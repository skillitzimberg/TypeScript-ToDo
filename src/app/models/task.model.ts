export class Task {
  done: boolean = false;

  constructor(public description: string, public priority: number) {

  }

  displayPriority(){
    return this.priority;
  }

  markDone() {
    this.done = true;
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
