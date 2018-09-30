import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { AppCommonModule } from '@app/common';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [
    HomePageComponent
  ],
  providers: [],
})
export class HomePageModule { }
