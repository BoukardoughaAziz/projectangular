import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userRole = this.getUserRole(); // Method to get the user's role

    if (route.data.roles && route.data.roles.indexOf(userRole) === -1) {
      this.router.navigate(['/maps']);
      return false;
    }

    // authorised so return true
    return true;
  }

  private getUserRole(): string {

    return "DIRECTEUR";
  }
}
