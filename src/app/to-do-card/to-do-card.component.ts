import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../app/to-do.model';

@Component({
  selector: 'app-to-do-card',
  imports: [CommonModule, FormsModule], // Add these

  templateUrl: './to-do-card.component.html',
  styleUrl: './to-do-card.component.css',
})
export class ToDoCardComponent {
  
  isEditing = false;
  editedText = '';
  @Input() todo!: ToDo;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<ToDo>();


  startEdit() {
    this.isEditing = true;
    this.editedText = this.todo.todo;
  }

  saveEdit() {
    this.edit.emit({ ...this.todo, todo: this.editedText });
    this.isEditing = false;
  }
}
