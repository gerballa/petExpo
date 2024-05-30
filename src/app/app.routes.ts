import { Routes } from '@angular/router';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'pet-list',
        component: AnimalsListComponent,
    },
    {
        path: 'pet-details/:type/:id',
        component: PetDetailsComponent,
    },

];
