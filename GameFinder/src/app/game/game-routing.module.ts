import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { UserGuard } from '../auth/user.guard';
import { EditGameComponent } from './edit-game/edit-game.component';


const routes: Routes = [
  { path: "add-game", component: AddGameComponent, canActivate: [UserGuard] },
  { path: "edit-game/:gameId", component: EditGameComponent, canActivate: [UserGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class GameRoutingModule { }
