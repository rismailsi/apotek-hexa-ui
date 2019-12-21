import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: '../modules/product/product.module#ProductModule'
      },
      {
        path: 'purchasing',
        loadChildren: '../modules/purchasing/purchasing.module#PurchasingModule'
      },
      {
        path: 'receiving',
        loadChildren: '../modules/receiving/receiving.module#ReceivingModule'
      },
      {
        path: 'sales',
        loadChildren: '../modules/sales/sales.module#SalesModule'
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
