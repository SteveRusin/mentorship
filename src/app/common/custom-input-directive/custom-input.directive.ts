import { Directive, Input } from '@angular/core';

/* ask why host is for */
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
