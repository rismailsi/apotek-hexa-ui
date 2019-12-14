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
        path: 'good-receipts',
        loadChildren: '../modules/product/product.module#GoodReceiptModule'
      },
      {
        path: 'sales',
        loadChildren: '../modules/product/product.module#SalesModule'
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
