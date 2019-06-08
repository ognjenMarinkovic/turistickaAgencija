import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MapaComponent } from './mapa/mapa.component';
import { PutovanjaComponent } from './putovanja/putovanja.component';
import { AddPlaceFormComponent } from './add-place-form/add-place-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { state: 'home' }},
  { path: 'mapa', component: MapaComponent, data: { state: 'mapa' }},
  { path: 'addplaceform', component: AddPlaceFormComponent, data: { state: 'addplaceform' }},
  { path: 'putovanja', component: PutovanjaComponent, data: { state: 'putovanja' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRouting = RouterModule.forRoot(routes, { 
  useHash: true
});
