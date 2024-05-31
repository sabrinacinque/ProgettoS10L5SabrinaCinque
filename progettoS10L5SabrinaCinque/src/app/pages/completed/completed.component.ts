import { Component, OnInit } from '@angular/core';
import { iTodo } from './../../Models/i-todo';
import { UserService } from '../../user.service';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  completedTodosConNomeUser: (iTodo & { user?: { firstName: string; lastName: string } })[] = [];

  constructor(private userService: UserService, private todoService: TodoService) { }

  ngOnInit() {
    const users = this.userService.getUsers();
    this.completedTodosConNomeUser = this.todoService.getCompletedTodosWithUser(users);
  }
}
