import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FatherRoutingModule } from './father-routing.module';
import { IndexComponent } from './index/index.component';
import { Index1Component } from './index1/index1.component';


@NgModule({
  declarations: [IndexComponent, Index1Component],
  imports: [
    CommonModule,
    FatherRoutingModule
  ]
})
export class FatherModule { }
