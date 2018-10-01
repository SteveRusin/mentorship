import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { components, routes } from './home-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    components
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
