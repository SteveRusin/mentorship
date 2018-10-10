import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.local.scss']
})
export class AdminPageComponent {
  constructor(private _location: Location) { }
  
  goBack() {
    this._location.back();
  }
}
