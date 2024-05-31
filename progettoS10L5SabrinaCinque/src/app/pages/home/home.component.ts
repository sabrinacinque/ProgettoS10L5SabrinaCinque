import { Component, OnInit } from '@angular/core';
import { iTodo } from './../../Models/i-todo';
import { UserService } from '../../user.service';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todosConNomeUser: (iTodo & { user?: { firstName: string; lastName: string } })[] = [];

  constructor(private userService: UserService, private todoService: TodoService) { }

  ngOnInit() {
    const users = this.userService.getUsers();
    this.todosConNomeUser = this.todoService.getTodosWithUser(users);
  }
}
