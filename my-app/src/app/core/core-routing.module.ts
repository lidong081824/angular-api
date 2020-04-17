import { TestDirective } from 'app/core/directive/test.directive';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { HelloComponent } from 'app/pages/hello/hello.component';

const routes: Routes = [
  {
    path: 'persion',
    children: [{
      path: '',
      loadChildren: () => import('../pages/persion/persion.module').then(m => m.PersionModule)
    }],
  },
  {
    path: 'father',
    children: [{
      path: '',
      loadChildren: () => import('../pages/father/father.module').then(m => m.FatherModule)
    }]
  },
  {
    path: 'hello', component: HelloComponent
  },
  {
    path: '', redirectTo: 'hello', pathMatch: 'full'
  },
  {
    path: '**', component: EmptyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
