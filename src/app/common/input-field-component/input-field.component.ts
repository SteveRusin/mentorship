import { Component, ContentChild } from '@angular/core';

import { CustomInputDirective } from '../custom-input-directive/custom-input.directive';
@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.local.scss']
})
export class InputFieldComponent  {
  @ContentChild(CustomInputDirective) public customInput: CustomInputDirective;

}
