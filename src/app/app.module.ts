// Larisa Pyykölä, student number 1702357

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// added import from  here
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

const firebaseUiAuthConfig: firebaseui.auth.Config = { // deleted not needed auth options
  signInFlow: 'popup',
  signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID // I use only email auth for now
  ],
  tosUrl: '/terms', // added link to terms page
  privacyPolicyUrl: '/privacy',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE // disabled account chooser - set it to none
};
// till here


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
// added following inports
    AngularFireModule.initializeApp(environment.firebase), // changed  to firebase and imported environment
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
