import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { UserGuard } from '../auth/user.guard';
import { GuestGuard } from '../auth/guest.guard';


const routes: Routes = [
  {path: "login", component: LoginComponent, canActivate: [GuestGuard]},
  {path: "register", component: RegisterComponent, canActivate: [GuestGuard]},
  {path: "logout", component: LogoutComponent, canActivate: [UserGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
