import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service'; // Import the AuthService
import { GameService } from '../../game.service';

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

  constructor(private gameService: GameService, private authService: AuthService) { } // Inject the AuthService

  onSubmit(): void {
    const currentUser = this.authService.getCurrentUser(); // Get the current user
    if (!currentUser) {
      console.error('No user logged in.'); // Handle error if no user is logged in
      return;
    }

    const gameData = {
      title: this.title,
      year: this.year,
      description: this.description,
      imageUrl: this.imageUrl,
      ownerId: currentUser.uid // Include the ownerId in the game data
    };

    this.gameService.addGame(gameData).subscribe(
      (response) => {
        console.log('Game added successfully:', response);
        // Optionally, you can navigate to a different page after adding the game
      },
      (error) => {
        console.error('Error adding game:', error);
      }
    );
  }
}
