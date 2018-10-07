import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { components, routes } from './admin-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class AdminPageModule { }
