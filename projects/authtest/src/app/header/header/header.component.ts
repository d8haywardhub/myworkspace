import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthStoreService, User } from 'auth';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();
  currentUser$: Observable<User>;
  currentUser: User;

  constructor( private authStore: AuthStoreService, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.currentUser$ = this.authStore.currentUser$
    this.currentUser = this.authStore.currentUser;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public logout(): void {
    console.log("Logging out");
    this.authService
    .logout(this.currentUser)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      response => {
        console.log('Logout Success!', response);
        this.router.navigate(["/home"]);
      },
      error => console.error('Logout Error!', error)
    )

  }

  public isLoggedIn(): boolean {
    //debugger;
    this.currentUser = this.authStore.currentUser;
    console.log(this.currentUser)
    /*
    let b:boolean = false;
    let a:boolean = this.currentUser !== undefined;

    if (a) {
      b = this.currentUser.email !== "";
    }

    console.log(a);
    console.log(b);
    return (a && b);
    */
    return (this.currentUser !== undefined && ( this.currentUser.email !== "" && this.currentUser.email !== undefined ) );
  }

}
