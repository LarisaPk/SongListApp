// Larisa Pyykölä, student number 1702357
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FirebaseUIModule } from 'firebaseui-angular'; // import added 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseUIModule, // added import here
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
