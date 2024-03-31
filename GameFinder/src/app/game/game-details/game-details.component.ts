import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  gameId!: string;
  game$!: Observable<any>; 
  isOwner: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id') || ''; 
    console.log('Game ID:', this.gameId); 
    this.getGameDetails();
  }

  getGameDetails(): void {
    this.game$ = this.firestore.collection('games').doc(this.gameId).valueChanges();
    this.game$.subscribe((game: any) => {
      if (game) {
        this.isOwner = game.ownerId === this.authService.user?.uid; 
      }
    });
  }

  editGame(): void {
    this.router.navigate(['/edit', this.gameId]);
  }

  deleteGame(): void {
    this.firestore.collection('games').doc(this.gameId).delete().then(() => {
      console.log('Game deleted successfully');
      this.router.navigate(['/home']); 
    }).catch((error) => {
      console.error('Error deleting game: ', error);
  })
}
  
}
