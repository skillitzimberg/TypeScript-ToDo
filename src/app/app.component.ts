import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  currentFocus: string = 'Angular & TypeScript Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();


  tasks: Task[] = [
    new Task('Finish weekend Angular homework', 'High'),
    new Task('Begin brainstroming possible JS group projects','Medium'),
    new Task('Add Readme file to last few Angular repos on Github', 'Low')
  ];

  editTask() {
    alert("Time to edit a task!");
  }
}

 // <button (click)="editTask()">Edit</button> 
