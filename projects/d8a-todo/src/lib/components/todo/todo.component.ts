import { Component, OnInit, OnDestroy } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { StoreService } from '../../state/store.service';
import { Todo } from '../../models/todo';
import { TodoService } from '../../state/todo.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'd8a-todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject();
  todos$: Observable<Todo[]>;
  newTodo: string;

  constructor(private store: StoreService, private todoService: TodoService) { }

  ngOnInit() {
    debugger;
    this.store.fetchAllTodos();
    this.todos$ = this.store.todos$;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getTextDecoration(todo: Todo): string {
    return todo && todo.done ? "line-through" : "none"
  }

  async addATodo() {
    console.log("1....")
    this.store.addTodo(this.newTodo);
    /*
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );*/

      console.log("2.....")

  }


  onChange(event):void {
    debugger;
    console.log(event);
  }

  async toggleDone(todoIndex: any) {
    await this.store.toggleDone(todoIndex);
  }

}
