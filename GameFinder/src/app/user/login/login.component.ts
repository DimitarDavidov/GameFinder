import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  allRequired: boolean = false
  constructor(private auth: AngularFireAuth, private router: Router) { }

  loginUser(): void {

    if(this.email.trim() === "", this.password.trim() === ''){
      this.allRequired = true
      return;
    }
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        console.log('User logged in successfully:', userCredential.user);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Login failed:', error.message);
        alert('Login failed: ' + error.message);
      });
  }
}
