import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInputDirective } from './custom-input-directive/custom-input.directive';
import { InputFieldComponent } from './input-field-component/input-field.component';
@NgModule({
  declarations: [
    CustomInputDirective,
    InputFieldComponent
  ],
  imports: [CommonModule],
  exports: [
    CustomInputDirective,
    InputFieldComponent
  ],
  providers: [],
})
export class AppCommonModule { }
