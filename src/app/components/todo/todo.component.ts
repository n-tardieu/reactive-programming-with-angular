import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, loadTodos, removeTodo } from 'src/app/state/todos/todo.actions';
import { selectAllTodos } from 'src/app/state/todos/todo.selector';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public allTodos$ = this.store.select(selectAllTodos);
  public todo = '';

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  addTodo() {
    this.store.dispatch(addTodo({ content: this.todo }));
    this.todo = '';
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
