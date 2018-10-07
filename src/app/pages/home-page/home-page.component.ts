import { Component } from '@angular/core';
import { AdminService } from '@app/services';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.local.scss']
})
export class HomePageComponent {

  constructor(private adminService: AdminService) { }

  public isAdmin(): boolean {
    return this.adminService.isAdmin;
  }

  public toggleAdmin(): void {
    this.adminService.toggleAdminRights();
  }
}
