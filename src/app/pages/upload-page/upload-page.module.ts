import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppCommonModule } from '@app/common';
import { components, routes } from './upload-page-routing.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppCommonModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class UploadPageModule { }
