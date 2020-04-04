import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from 'app/pages/hello/hello.component';
import { EmptyComponent } from 'app/pages/empty/empty.component';


const routes: Routes = [
  {
    path: 'hello', pathMatch: 'full', component: HelloComponent,
  },
  {
    path: '', component: EmptyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
