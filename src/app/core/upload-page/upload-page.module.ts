import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPageComponent } from './upload-page.component';
import { AppCommonModule } from '@app/common';
@NgModule({
  declarations: [
    UploadPageComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [
    UploadPageComponent
  ],
  providers: [],
})
export class UploadPageModule { }
