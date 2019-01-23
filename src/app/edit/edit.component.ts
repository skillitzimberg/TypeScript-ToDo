import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() childSelectedTask: Task;
  @Output() clickedDone = new EventEmitter();

  constructor() { }

  finishedEditing() {
    this.clickedDone.emit();
  }

}
