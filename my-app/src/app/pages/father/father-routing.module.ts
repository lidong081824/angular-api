import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'quick-sort', component: QuickSortComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FatherRoutingModule { }
