import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GameService } from '../../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  title: string = '';
  year: number = 0;
  description: string = '';
  imageUrl: string = '';
  allRequired: boolean = false;

  constructor(private gameService: GameService, private authService: AuthService, private router: Router) { }
  onSubmit(): void {

    if(this.title.trim() === "", this.description.trim() === '', this.year === 0, this.description === '', this.imageUrl ===''){
      this.allRequired = true
      return;
    }

    const currentUser = this.authService.getCurrentUser(); 
    if (!currentUser) {
      console.error('No user logged in.'); 
      return;
    }

    const gameData = {
      title: this.title,
      year: this.year,
      description: this.description,
      imageUrl: this.imageUrl,
      ownerId: currentUser.uid,
    };

    this.gameService.addGame(gameData).subscribe(
      (response) => {
        console.log('Game added successfully:', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error adding game:', error);
      }
    );
  }
}
