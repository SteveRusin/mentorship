import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '@app/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UploadPageComponent } from './upload-page/';

@NgModule({
  declarations: [
    UploadPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppCommonModule
  ],
  exports: [
    UploadPageComponent
  ],
  providers: [],
})
export class CoreModule { }
