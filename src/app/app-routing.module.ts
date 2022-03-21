import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorroProgramadoComponent } from './components/app/ahorro-programado/ahorro-programado.component';
import { CajaMayorComponent } from './components/app/caja-mayor/caja-mayor.component';
import { CajaMenorComponent } from './components/app/caja-menor/caja-menor.component';
import { ClientesComponent } from './components/app/clientes/clientes.component';
import { DevolucionesComponent } from './components/app/devoluciones/devoluciones.component';
import { HomeComponent } from './components/app/home/home.component';
import { ReservasComponent } from './components/app/reservas/reservas.component';
import { ToursComponent } from './components/app/tours/tours.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'reservas', component: ReservasComponent},
  { path: 'devoluciones', component: DevolucionesComponent},
  { path: 'ahorro-programado', component: AhorroProgramadoComponent},
  { path: 'tours', component: ToursComponent},
  { path: 'caja-menor', component: CajaMenorComponent},
  { path: 'caja-mayor', component: CajaMayorComponent},
  { path: '**', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
