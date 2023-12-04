import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api' ; // Replace with your actual API URL

  constructor(private http: HttpClient, private router: Router) { }

  // Method to handle login
  login(email: string, password: string): Observable<any> {
    console.log(email,password)
    return this.http.post<any>(`${this.apiUrl}/auth/authenticate`, { email, password });
  }

  // Method to handle registration
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, user);
  }


  
  // Method to store user data after successful authentication
  storeUserData(token: string, userRole: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', userRole);
    // You can also store other user data as needed
  }

  // Method to get stored user role
  getUserRole(): string {
    return localStorage.getItem('userRole') || '';
  }

  // Method to check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Method to log out the user
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    // Navigate to login or home page after logout
    this.router.navigate(['/login']);
  }

  // Method to route user based on the role
  routeUserBasedOnRole(role: string): void {
    if (role === 'ADMIN') {
      this.router.navigate(['/admin-dashboard']);
    } else if (role === 'DIRECTEUR') {
      this.router.navigate(['/directeur-dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
