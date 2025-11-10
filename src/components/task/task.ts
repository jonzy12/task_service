import { Injectable } from '@angular/core';

export interface Task {
  description: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(description: string): void {
    this.tasks.push({ description, done: false });
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  toggleDone(index: number): void {
    this.tasks[index].done = !this.tasks[index].done;
  }
}
