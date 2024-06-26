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
  //i punti interr sono stati inseriti perchè noi inizialmente non abbiamo questi valori nei vari array, arrivano "dopo"...quando incrociamo i dati
  todosConNomeUser: (iTodo & { user?: { firstName: string; lastName: string } })[] = [];
  filteredTodos: (iTodo & { user?: { firstName: string; lastName: string } })[] = [];
  searchQuery: string = '';

  constructor(private svcUser: UserService, private svcTodo: TodoService) { }

  ngOnInit() {
    const users = this.svcUser.getUsers();
    this.todosConNomeUser = this.svcTodo.getTodosWithUser(users);
    this.filteredTodos = this.todosConNomeUser;
  }

  onSearch() {//funzione di ricerca nell'input 
    const query = this.searchQuery.toLowerCase();
    if (query) {
      const filteredUsers = this.svcUser.searchTodosByUserName(this.todosConNomeUser, query);
      this.filteredTodos = filteredUsers.flatMap(user => user.todos ?? []);
    } else {
      this.filteredTodos = this.todosConNomeUser;
    }
  }
}
