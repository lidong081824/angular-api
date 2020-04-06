import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersionRoutingModule } from './persion-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    PersionRoutingModule
  ]
})
export class PersionModule { }
