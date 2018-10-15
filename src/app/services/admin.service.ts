import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isAdmin = false;

  toggleAdminRights(): void {
    this.isAdmin = !this.isAdmin;
  }

  checkAdmin(): Observable<boolean> {
    return of(this.isAdmin).pipe(
      delay(1000)
    )
  }
}
