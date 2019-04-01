// Larisa Pyykölä, student number 1702357
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; // added import
import { Observable } from 'rxjs';  // added import
import { map } from 'rxjs/operators'; // added import

// added interface Song
export interface Song {
 songName: string;
 artistName: string;
 createdAt: number;

}

@Injectable({
  providedIn: 'root'
})

export class SongsService {
// reference to firestore collection holds elements of type Song
  private songsCollection: AngularFirestoreCollection <Song>;

  // added Song element. Observable array od songs
  private songs: Observable<Song[]>;

  constructor(db: AngularFirestore) { // reference to the db
    this.songsCollection = db.collection<Song>('songs'); // assignt songsCollection to database collection of type Song and call it songs

// added this snippet
    this.songs = this.songsCollection.snapshotChanges().pipe( // listens changes on the database and pipes actions
      map(actions => { // map the actions we get back
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; // access id of the document used for updating or removing the object later
          return {id, ...data};
        });
      })
    );
  }

  // added functions:

  getSongs() { // returns array of songs
    return this.songs;
  }

  getSong(id) { // returns one Song document from db
    return this.songsCollection.doc<Song>(id).valueChanges();
  }

  updateSong (song: Song, id) { // updates song
    return this.songsCollection.doc(id).update(song);
  }

  addSong(song: Song) { // adds song
    return this.songsCollection.add(song);
  }

  removeSong(id) { // delete the song
    return this.songsCollection.doc(id).delete();
  }
}
