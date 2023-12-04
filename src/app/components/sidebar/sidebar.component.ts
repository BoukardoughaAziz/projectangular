import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {

    path: string;
    title: string;
    icon: string;
    class: string;
    roles: string[]; 

}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bord',  icon: 'ni-tv-2 text-primary', class: '' ,roles: ['ADMIN','DIRECTEUR']},
    //{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' ,roles: ['ADMIN','USER']},
    //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' ,roles: ['ADMIN','USER']},
    { path: '/universite', title: 'Gestion des Université',  icon:'ni-istanbul text-info', class: '' ,roles: ['ADMIN','DIRECTEUR']},
    { path: '/foyer', title: 'Gestion Foyer',  icon:'ni-building text-info', class: '' ,roles: ['DIRECTEUR']},
    { path: '/etudiant', title: 'Gestion Etudiants',  icon:'ni-circle-08 text-yellow', class: '' ,roles: ['DIRECTEUR']},
    { path: '/reservation', title: 'Réservations',  icon:'ni-calendar-grid-58 text-primary', class: '' ,roles: ['DIRECTEUR']},
    { path: '/bloc', title: 'Gestion Blocs',  icon:'ni ni-building text-red', class: '' ,roles: ['DIRECTEUR']},
    { path: '/user-profile', title: 'Profile',  icon:'ni-single-02 text-success', class: '' ,roles: ['ADMIN','DIRECTEUR']},
    //{ path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' ,roles: ['ADMIN','USER']},
    //{ path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' ,roles: []},
    //{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '',roles: []}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

 //constructor(private router: Router, private authService: AuthService) { }
 constructor(private router: Router) { }

  ngOnInit() {
    //const userRole = this.authService.getUserRole(); // Fetch the user role
    const userRole = "DIRECTEUR"; // Fetch the user role
    this.menuItems = ROUTES.filter(menuItem => menuItem.roles.includes(userRole));
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
