import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDoCardComponent } from '../to-do-card/to-do-card.component'; // adjust path as needed
import { ToDo } from '../../app/to-do.model';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ToDoCardComponent], // Add these
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  newTodoText = '';
  todos: ToDo[] = [
    { id: 1, todo: 'Do something nice for someone', completed: false },
    { id: 2, todo: 'Memorize a poem', completed: true },
    { id: 3, todo: 'Watch a classic movie', completed: false },
  ];  

  addToDo() {
    if (this.newTodoText.trim()) {
      console.log(this.newTodoText);
      const newTodo: ToDo = {
        id: Date.now(),
        todo: this.newTodoText,
        completed: false,
      };
      this.todos.push(newTodo);
      this.newTodoText = '';
    }
  }
  
  deleteToDo(id: number) {
    console.log(id)

    this.todos = this.todos.filter((todo) => todo.id !== id);    console.log( this.todos)

  }

  editToDo(updatedTodo: ToDo) {
    console.log(updatedTodo)
    this.todos = this.todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
  }
}
