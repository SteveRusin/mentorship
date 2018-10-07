import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '@app/services';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private adminService: AdminService) { }
  canActivate(): Observable<boolean> {
    return this.adminService.checkAdmin();
  }
}
