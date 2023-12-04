import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { UniversitesComponent } from 'src/app/pages/universite/universite.component';
import { RoleGuard } from 'src/app/auth/role.guard';
import { FoyerComponent } from 'src/app/pages/foyer/foyer.component';
import { EtudiantComponent } from 'src/app/pages/etudiant/etudiant.component';
import { ReservationComponent } from 'src/app/pages/reservation/reservation.component';
import { AddUniversiteComponent } from 'src/app/pages/universite/add-universite/add-universite.component';
import { UpdateUniversiteComponent } from 'src/app/pages/universite/update-universite/update-universite.component';
import { BlocComponent } from 'src/app/pages/bloc/bloc.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    //{ path: 'tables',         component: TablesComponent },
    //{ path: 'icons',          component: IconsComponent },
    //{ path: 'maps',           component: MapsComponent },
    { 
        path: 'universite',      
        component: UniversitesComponent,
        canActivate: [RoleGuard],
    },
    { 
        path: 'universite/add',      
        component: AddUniversiteComponent,
        canActivate: [RoleGuard],
    },
    { 
        path: 'edit-universite/:id',      
        component: UpdateUniversiteComponent,
        canActivate: [RoleGuard],
    },
    { 
        path: 'foyer',      
        component: FoyerComponent,
        canActivate: [RoleGuard],
    },
    { 
        path: 'etudiant',      
        component: EtudiantComponent,
        canActivate: [RoleGuard],
    },
    { 
        path: 'bloc',      
        component: BlocComponent,
        canActivate: [RoleGuard],
    },
    { 
        path: 'reservation',      
        component: ReservationComponent,
        canActivate: [RoleGuard],
    },

    
];
