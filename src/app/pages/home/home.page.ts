// Larisa Pyykölä student number 1702357
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'; // added import

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor (public afAuth: AngularFireAuth) {

}


}
