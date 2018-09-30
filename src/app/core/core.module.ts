import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '@app/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
// doesn't work. Why?
// import { HomePageModule } from '@app/core';
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    AppCommonModule
  ],
  exports: [
  ],
  providers: [],
})
export class CoreModule { }
