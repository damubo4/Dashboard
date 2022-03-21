import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/nav/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { HomeComponent } from './components/app/home/home.component';
import { ClientesComponent } from './components/app/clientes/clientes.component';
import { ReservasComponent } from './components/app/reservas/reservas.component';
import { DevolucionesComponent } from './components/app/devoluciones/devoluciones.component';
import { AhorroProgramadoComponent } from './components/app/ahorro-programado/ahorro-programado.component';
import { ToursComponent } from './components/app/tours/tours.component';
import { CajaMenorComponent } from './components/app/caja-menor/caja-menor.component';
import { CajaMayorComponent } from './components/app/caja-mayor/caja-mayor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    HomeComponent,
    ClientesComponent,
    ReservasComponent,
    DevolucionesComponent,
    AhorroProgramadoComponent,
    ToursComponent,
    CajaMenorComponent,
    CajaMayorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
