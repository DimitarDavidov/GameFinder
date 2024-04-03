import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  gameId!: string;
  gameData: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: AngularFirestore,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('gameId') || '';
    this.getGameData();
  }

  getGameData(): void {
    this.firestore.collection('games').doc(this.gameId).valueChanges().subscribe((game: any) => {
      if (game) {
        this.gameData = game;
      }
    });
  }

  updateGame(): void {
    this.gameService.editGame(this.gameId, this.gameData).subscribe(
      () => {
        
        console.log('Game updated successfully');
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error updating game: ', error);
      }
    );
  }
}
