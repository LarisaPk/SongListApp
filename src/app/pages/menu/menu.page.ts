// Larisa Pyykölä, student number 1702357
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  // added array of pages for the side menu
  pages = [
    {
      title: 'First page',
      url: './first'
    },
    {
      title: 'Second page',
      url: './second'
    }
  ];

  selectedPath = ''; // variable for selected path used in scss for highliting the page we are on
// modifed constructor - router
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => { // subscribtion for the router events
      if (event && event.url) {
        this.selectedPath = event.url; // check if we on that path and use is in ctyling

      }
    });
  }

  ngOnInit () {
  }
}
