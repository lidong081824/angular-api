import { InputbgDirective } from './../../core/directive/inputbg.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FatherRoutingModule } from './father-routing.module';
import { IndexComponent } from './index/index.component';
import { TestDirective } from 'app/core/directive/test.directive';


@NgModule({
  declarations: [IndexComponent, TestDirective, InputbgDirective],
  imports: [
    CommonModule,
    FatherRoutingModule,
  ],
  providers: [TestDirective, InputbgDirective]
})
export class FatherModule { }
