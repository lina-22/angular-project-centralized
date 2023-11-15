import { Component } from '@angular/core';
import { Todo } from './model';
// import { NgModel } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoList: Todo[] = [];
  todo: Todo = {
    Title: '',
    Id: null,
  };

  addTodo(): void {
    console.log(this.todo);
  }
}
