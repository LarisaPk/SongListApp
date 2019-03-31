// Larisa Pyykölä, student number 1702357
import { Component, OnInit } from '@angular/core';
import { Song, SongsService } from 'src/app/services/songs.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.page.html',
  styleUrls: ['./song-details.page.scss'],
})
export class SongDetailsPage implements OnInit {
 song: Song = {
  songName: 'Test',
  artistName: 'Test',
  createdAt: new Date().getTime(),
  // id: 'test12345'
 };

 songId = null;
  constructor(private songService: SongsService, private route: ActivatedRoute, private loadingController: LoadingController,
    private nav: NavController) { }

  ngOnInit() {
    this.songId = this.route.snapshot.params['id'];
    if (this.songId) {
      this.loadSong();

    }
  }
  async loadSong() {
    const loading = await this.loadingController.create({
      message: 'Loding Song...'
    });
    await loading.present();

    this.songService.getSong(this.songId).subscribe(res => {
      loading.dismiss();
      this.song = res;
    });
  }

  async saveSong() {
    const loading = await this.loadingController.create({
      message: 'Saving Song...'
    });
    await loading.present();

    if (this.songId) {
      this.songService.updateSong(this.song, this.songId).then(() => {
        loading.dismiss();
        this.nav.navigateBack(['menu', 'first']); // it goes back to homepage when save clicked. TODO - change to song list tab
      });

    } else {
      this.songService.addSong(this.song).then(() => {
        loading.dismiss();
        this.nav.navigateBack(['menu', 'first']); // it goes back to homepage when save clicked. TODO - change to song list tab
      });
    }

  }
}
