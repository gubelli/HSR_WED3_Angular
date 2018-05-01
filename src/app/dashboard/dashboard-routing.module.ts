import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PaymentComponent} from './components';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: PaymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
