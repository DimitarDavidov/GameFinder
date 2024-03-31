import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent {
  constructor(private auth: AngularFireAuth, private router: Router) {
    this.logout();
  }

  logout(): void {
    this.auth.signOut().then(() => {
      console.log('User logged out successfully');
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.error('Logout failed:', error);
    });
  }
}
