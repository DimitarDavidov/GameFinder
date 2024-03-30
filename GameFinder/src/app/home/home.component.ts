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
    this.firestore.collection('games').valueChanges().subscribe((games: any[]) => {
      this.games = games;
    });
  }
}
