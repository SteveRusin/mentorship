import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.local.scss']
})
export class InputFieldComponent implements AfterViewInit {
  @ViewChild('input') public input: any;

  public ngAfterViewInit(): void {
    console.log(this.input);
  }
}
