// Larisa Pyykölä student number 1702357

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'; // added import
import {Router} from '@angular/router'; // added import of router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // declared constructior with dependency here
constructor (public afAuth: AngularFireAuth, private router: Router) {

}
// Listen to auth state changes
  ngOnInit() {
    const authObserver = this.afAuth.authState.subscribe((Response) => {
      if (Response) {
        console.log('Logged in :)');
        this.router.navigate (['menu', 'first']); // if logged in - navigates to menu page
        authObserver.unsubscribe(); // when user logs-inn- unsubscrubes from state chnges listener
      } else {
        console.log('Logged out :(');
        this.router.navigate (['login']); // if logged out - navigates to login page
      }
    });
  }
// added sign out method
signOut() {
  this.afAuth.auth.signOut().then(() => {
    location.reload();

  });
}

}
