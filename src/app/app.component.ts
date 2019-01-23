import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedTask = null;

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework', 1),
    new Task('Begin brainstroming possible JS group projects', 2),
    new Task('Add Readme file to last few Angular repos on Github', 3)
  ];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }
}
