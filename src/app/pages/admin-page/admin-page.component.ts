import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.local.scss']
})
export class AdminPageComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
