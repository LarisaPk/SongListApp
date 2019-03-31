// Larisa Pyykölä, student number 1702357
import { Component, OnInit } from '@angular/core';
import { Song, SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.page.html',
  styleUrls: ['./song-list.page.scss'],
})
export class SongListPage implements OnInit {
// added songs array
songs: Song[];

// constructor with private songs service
  constructor(private songsService: SongsService) {}

  ngOnInit() {
    this.songsService.getSongs().subscribe(res => { // call songservice and subscribe
        this.songs = res; // setting songs
    });
  }

  // function for removing items

  remove(item: { id: string; }) {
    this.songsService.removeSong(item.id);
  }

}
