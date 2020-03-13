import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { authRoutes } from './auth.routing';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule, // So that we can use @angular/common/http/HttpClient
    RouterModule.forChild(authRoutes),
  ],
  exports: [LoginComponent , RouterModule]
})
export class AuthModule { }
