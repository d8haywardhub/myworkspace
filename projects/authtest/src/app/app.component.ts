import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer } from 'rxjs';

//import { EnvService } from './services/env.service';
import { EnvService } from 'env';
import { AuthStoreService, User } from 'auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit, OnDestroy {
  title = 'authtest';
  currentUser: User;

  constructor(
    private env: EnvService,
    private authStore: AuthStoreService
  ) {
   /*setTimeout(() => { 
    console.log(this.env)
    if(this.env.enableDebug) {
      console.log('Debug mode enabled!');
    }
    }, 10000);*/
  }

  ngOnInit() {
    console.log('App initializing....');
   
    this.currentUser =  this.authStore.getState();



  }

  ngOnDestroy() {
    console.log('App being destroyed....');
  }


}
