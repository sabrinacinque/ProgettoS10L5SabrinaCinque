import { Component, OnInit } from '@angular/core';
import { iTodo } from '../../Models/i-todo';
import { iUser } from '../../Models/i-user';
import { TodoService } from '../../todo.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  usersWithTodos: (iUser & { todos?: iTodo[] })[] = [];

  constructor(private svcUser: UserService, private todoService: TodoService) { }

  ngOnInit() {
    const todos = this.todoService.getTodos();
    this.usersWithTodos = this.svcUser.getUsersWithTodos(todos);
  }
}
