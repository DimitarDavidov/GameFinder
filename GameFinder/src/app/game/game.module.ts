import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGameComponent } from './add-game/add-game.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditGameComponent } from './edit-game/edit-game.component';



@NgModule({
  declarations: [
    AddGameComponent,
    GameDetailsComponent,
    EditGameComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class GameModule { 
  
  
}
