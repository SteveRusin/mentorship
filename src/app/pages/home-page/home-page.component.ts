import { Component } from '@angular/core';
import { AdminService } from '@app/services';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.local.scss']
})
export class HomePageComponent {

  constructor(private _adminService: AdminService) { }

  isAdmin(): boolean {
    return this._adminService.isAdmin;
  }

  toggleAdmin(): void {
    this._adminService.toggleAdminRights();
  }
}
