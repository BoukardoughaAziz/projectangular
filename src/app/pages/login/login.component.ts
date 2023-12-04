import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  emailInput: string;
  passwordInput: string;
  
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

onLoginClick(): void {
  this.authService.login(this.emailInput, this.passwordInput).subscribe(response => {
    this.authService.storeUserData(response.token, response.userRole); // Assuming the response contains a token and userRole
    this.authService.routeUserBasedOnRole(response.userRole);
  }, error => {
    // Handle login errors here
    console.error('Login error:', error);
  });
}

}
