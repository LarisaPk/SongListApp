// Larisa Pyykölä student number 1702357
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// declared constructior with dependency here
constructor (public afAuth: AngularFireAuth) {

}
// added sign out method
signOut() {
  this.afAuth.auth.signOut().then(() => {
    location.reload();

  });
}

}
