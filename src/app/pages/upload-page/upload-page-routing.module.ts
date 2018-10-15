import { Routes } from '@angular/router';
import { UploadPageComponent } from './upload-page.component';

export const routes: Routes = [
  {
    path: '',
    component: UploadPageComponent,
    data: {
      animation: 'UploadPage'
    }
  }
]

export const components = [
  UploadPageComponent
];
