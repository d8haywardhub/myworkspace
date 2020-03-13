import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Todo } from '../models/todo';
import { TodoService } from './todo.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private todoService: TodoService) {
    this.fetchAllTodos();
  }

  async fetchAllTodos() {
    //return this.todoTester;

    this.todoService.getItems()
      .pipe(take(1))
      .subscribe(
        (todos: Todo[]) => this.todos = todos,            // next
        error          => { console.log(error); }        // error
        );
    
  }

  get todos$(): Observable<Todo[]> {
    return this._todos$.asObservable();
  }

  get todos(): Todo[] {
    return this._todos$.getValue()
  }

  set todos(todos: Todo[]) {
    this._todos$.next(todos);
  }



  async addTodo(todo: string) {
    debugger;
    const tmpId = { _id: this.uuid() };
    const newTodo1 = { note: todo, done: false, whendone: new Date() };
    const newTodo = {...newTodo1, ...tmpId};
    // Immutable update of the Todo list Array
    this.todos = [
      ...this.todos, 
      newTodo
    ];

    /* */
    try {
      const todoCreated = await this.todoService
        .create(newTodo)
        .toPromise();

      // we swap the local tmp record with the record from the server (id must be updated)
      const index = this.todos.indexOf(this.todos.find(t => (""+t._id) === tmpId._id));
      if (index > -1) {
        this.todos[index] = {
          ...todoCreated
        }
        this.todos = [...this.todos];
      }

    } catch (e) {
      // is server sends back an error, we revert the changes
      console.error(e);
      //this.removeCustomer(tmpId, false);
    }
    /* */


  }

  async toggleDone(index: any) {  //: Promise<boolean> {
    console.log("store: in toggleDone "+ index);
    // extract the To Do being toggled and toggle the done status
    let updatedTodo: Todo[] = this.todos.slice(index, index+1);
    updatedTodo[0].done = !updatedTodo[0].done
    // Immutably update the To Do list
    //this.todos = Object.assign([...this.todos], {[index]: updatedTodo[0]});
    // the following is an alternative approach....
    this.todos = [...this.todos.slice(0, index), updatedTodo[0], ...this.todos.slice(index + 1)]

 
  }
  /*export function*/ uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}


