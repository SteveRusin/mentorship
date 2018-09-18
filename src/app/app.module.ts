import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppCommonModule } from '@app/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
