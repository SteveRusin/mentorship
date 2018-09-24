import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[customInput]',
  host: {
    '[attr.placeholder]': 'placeholder',
    '[attr.required]': 'true',
  }
})
export class CustomInputDirective {
  @Input() public placeholder: string;

}
