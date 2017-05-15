import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainScreenComponent } from './main-screen.component';
import { MainScreenRoutingModule } from './main-screen-routing.module';

@NgModule({
  declarations: [
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    MainScreenRoutingModule
  ],

  exports: [
    MainScreenComponent
  ]
})
export class MainScreenModule { }
