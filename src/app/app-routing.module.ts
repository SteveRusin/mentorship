import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }, {
    path: 'home',
    loadChildren: './pages/home-page/home-page.module#HomePageModule'
  }, {
    path: 'upload',
    loadChildren: './pages/upload-page/upload-page.module#UploadPageModule'
  }, {
    path: 'admin',
    loadChildren: './pages/admin-page/admin-page.module#AdminPageModule'
  }
];
