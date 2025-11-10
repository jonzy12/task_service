import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskItemComponent],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.refreshTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
      this.refreshTasks();
    }
  }

  onRemoveTask(index: number) {
    this.taskService.removeTask(index);
    this.refreshTasks();
  }

  onToggleDone(index: number) {
    this.taskService.toggleDone(index);
    this.refreshTasks();
  }

  refreshTasks() {
    this.tasks = this.taskService.getTasks();
  }
}
