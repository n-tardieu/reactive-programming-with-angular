import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { addTodo, loadTodos, removeTodo } from '../../state/todos/todo.actions';
import { selectAllTodos } from '../../state/todos/todo.selector';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public allTodos$: Observable<Todo[]>;

  public todo = '';

  constructor(private store: Store<AppState>) {
    this.allTodos$ = this.store.select(selectAllTodos);
  }

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
