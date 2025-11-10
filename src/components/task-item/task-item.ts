import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.html',
  standalone: true,
  styleUrls: ['./task-item.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Input() index!: number;
  @Output() remove = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  deleteTask() {
    this.remove.emit(this.index);
  }

  toggleDone() {
    this.toggle.emit(this.index);
  }
}
