import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MapaComponent } from './mapa/mapa.component';
import { AddPlaceFormComponent } from './add-place-form/add-place-form.component';
import { PlaceUpdateComponent } from './place-update/place-update.component';
import { PlaceTableComponent } from './place-table/place-table.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'mapa', component: MapaComponent, data: { state: 'mapa' } },
  { path: 'addplace', component: AddPlaceFormComponent, data: { state: 'addplaceform' } },
  { path: 'updateplace/:id', component: PlaceUpdateComponent },
  { path: 'listplaces', component: PlaceTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});
