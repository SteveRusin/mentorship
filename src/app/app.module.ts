import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppCommonModule } from '@app/common';
import { CoreModule } from '@app/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppCommonModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
