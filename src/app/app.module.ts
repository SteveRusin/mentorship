import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@app/common';
import { CoreModule } from '@app/core';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppCommonModule,
    CoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
