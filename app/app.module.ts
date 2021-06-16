import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoverComponent } from './auth/cover/cover.component';
import { AddprodukComponent } from './florenceapp/addproduk/addproduk.component';
import { ProdukflowerComponent } from './florenceapp/produkflower/produkflower.component';
import { DashboardComponent } from './florenceapp/dashboard/dashboard.component';
import { FlorenceappComponent } from './florenceapp/florenceapp/florenceapp.component';
import { MaterialDesign } from './material/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CoverComponent,
    AddprodukComponent,
    ProdukflowerComponent,
    DashboardComponent,
    FlorenceappComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
