import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlorenceappComponent } from './florenceapp/florenceapp.component';
import { ProdukflowerComponent } from './produkflower/produkflower.component';
import { AddprodukComponent } from './addproduk/addproduk.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    FlorenceappComponent,
    ProdukflowerComponent,
    AddprodukComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlorenceappModule { }
