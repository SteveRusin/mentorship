import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[customInput]',
})
export class CustomInputDirective {
  @Input() public holder: string;
}
