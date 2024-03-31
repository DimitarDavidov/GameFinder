import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { UserGuard } from '../auth/user.guard';


const routes: Routes = [
  {path: "add-game", component: AddGameComponent, canActivate: [UserGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class GameRoutingModule { }
