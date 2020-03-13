import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoStore: Todo[] = [
    { note: "do foo", done:false, _id: "e21b749f-4655-4bbf-b74d-0bb31bdd1a69" },
    { note: "done bah", done:true, whendone:new(Date), _id: "e21b749f-4655-4bbf-b74d-0bb31bdd1a79" }
  ]

  constructor() { }

  getItems(): Observable<any> {

    /*
    return this.http
   .get<Item[]>("/api/item/read")
   .pipe(
     //map((items: Item[]) => { return items.map(item => { console.log(item); })}) ,
     tap(
       (items: Item[]) => {
         console.log("/api/item/read  tap next emitting items: ", items);
       },
       (err) => { console.log("/api/item/read emitting error: ", err); },
       () => { console.log("/api/item/read emitting done") }
     ),
     catchError(this.handleError)
   )
   ;*/
       const todos$ = new Observable((observer) => {
         observer.next(this.todoStore);
         observer.complete();
       });

       return todos$;
   
 }

 create(todo: Todo): Observable<any> {
  console.log("POST: /todo/ ...");
  console.log(todo);
  /*
  //this.authStoreService.changeState(user);
  return this.http
    .post("/api/item/create", { "item": item})
    //.post("/api/item/create", { "item": { "name": "blah" }})
    .pipe(
      tap(
         (resp: any) => {
          console.log("SUCESS /api/item/create  :", resp);
        },
        (err) => { console.log("ERROR /api/item/create:", err); },
        () => { console.log("... DONE /api/item/create") }
      ),
      catchError(this.handleError)
    )
  ;
  */

  //Local implementation just returns the supplied todo back as Observable....  TBD use server
  const todo$ = new Observable((observer) => {
    observer.next(todo);
    observer.complete();
  });

  return todo$;
}


}
