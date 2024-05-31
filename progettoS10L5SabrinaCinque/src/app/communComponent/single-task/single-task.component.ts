import { TodoService } from '../../todo.service';
import { iTodo } from './../../Models/i-todo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'] // Correggi da `styleUrl` a `styleUrls`
})
export class SingleTaskComponent {
  @Input() todo!: iTodo & { user?: { firstName: string; lastName: string } };

  constructor(private svcTodo: TodoService) {}

  toggleCompletion() {
    this.svcTodo.updateTodoStatus(this.todo.id, this.todo.completed);
  }
}
