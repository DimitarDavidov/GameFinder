import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGameComponent } from './add-game/add-game.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddGameComponent,
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ]
})
export class GameModule { 
  
  
}
