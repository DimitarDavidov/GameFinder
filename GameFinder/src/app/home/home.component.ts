import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: any[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.firestore.collection('games').snapshotChanges().subscribe((gamesSnapshot: any[]) => {
      this.games = gamesSnapshot.map(gameSnapshot => {
        const gameData = gameSnapshot.payload.doc.data();
        const id = gameSnapshot.payload.doc.id;
        return { id, ...gameData };
      });
    });
  }
}
