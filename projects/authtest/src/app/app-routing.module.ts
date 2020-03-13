import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';        // NOTE*** imported from dist ("e.g. c:/dev/myworkspace/dist/auth/auth")
import { LoginComponent } from './login/login/login.component';
import { TodoComponent } from './todo/todo/todo.component';

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    //{ path: "login", loadChildren: './authlibwrapper/authlibwrapper.module#AuthlibwrapperModule' },
    { path: "login", component: LoginComponent },
    { path: "todo", component: TodoComponent },
    { path: "**", component: HomeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }