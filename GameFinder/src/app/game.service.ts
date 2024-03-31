import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private firestore: AngularFirestore) { }

  addGame(gameData: any): Observable<any> {
    const promise = this.firestore.collection('games').add(gameData);
    return from(promise);
  }

}
