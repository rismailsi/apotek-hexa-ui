import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { LayoutComponent } from './layout.component';
import { MatExpansionModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class LayoutModule { }
