import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }, {
    path: 'home',
    loadChildren: '@app/pages#HomePageModule'
  }, {
    path: 'upload',
    loadChildren: '@app/pages#UploadPageModule'
  }
];
