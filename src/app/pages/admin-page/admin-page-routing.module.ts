import { Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { CanActivateGuard } from '@app/guards';
export const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    canActivate: [CanActivateGuard]
  }
];

export const components = [
  AdminPageComponent
];
