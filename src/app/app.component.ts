import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '@app/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.local.scss'],
  animations: [slideInAnimation]
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation'];
  }
}
