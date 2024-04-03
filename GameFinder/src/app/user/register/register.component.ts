import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passMatch: boolean = false;
  allRequired: boolean = false;

  constructor(private auth: AngularFireAuth, private router: Router) { }

  registerUser(): void {
    if (this.password !== this.confirmPassword) {
      this.passMatch = true
      return;
    }

    if(this.email.trim() === "", this.password.trim() === ''){
      this.allRequired = true
      return;
    }

    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        console.log('User registered successfully:', userCredential.user);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Registration failed:', error.message);
        alert('Registration failed: ' + error.message);
      });
  }

  isValidForm(): boolean {
    return this.email.trim() !== '' && 
           this.password.trim() !== '' && 
           this.confirmPassword.trim() !== '' && 
           this.password === this.confirmPassword;
  }
}
