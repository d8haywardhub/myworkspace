import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { AuthModule } from 'auth';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { TodoComponent } from './todo/todo/todo.component';
import { D8aTodoModule } from 'd8a-todo';

/*
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "find", redirectTo: "search" },
  { path: "search", component: HomeComponent },
  { path: "login", loadChildren: './authlibwrapper/authlibwrapper.module#AuthlibwrapperModule' },

  { path: "**", component: HomeComponent }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    //RouterModule.forRoot(routes, { useHash: true })
    AppRoutingModule,
    D8aTodoModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
