// Larisa Pyykölä, student number 1702357

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // empty path redirects to login page
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'details', loadChildren: './pages/song-details/song-details.module#SongDetailsPageModule' },
  { path: 'details/:id', loadChildren: './pages/song-details/song-details.module#SongDetailsPageModule' },

  /*
  *Leave out these pathes:
  *
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' },
  { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
  { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  { path: 'song-list', loadChildren: './pages/song-list/song-list.module#SongListPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
