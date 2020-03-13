# Myworkspace
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

Build
------
To build the Myworkspace libraries: 

Authentication library 
npm run buildauth
** Note ** Requires the Node.js backend project "authentication-backend-template" ( or similar JWT authentication server ) for login/register authentication
** Server side uses Redis for caching log-in attempts (security - repeat attacks). Can be configured off.
** MongoDB/Mongoose required

To Do List example Component Library
npm run buildtodo

To test authentication and To Do list example component locally use (then localhost:4200):
npm run authtest

