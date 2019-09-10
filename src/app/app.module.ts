import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { VestiComponent } from './vesti/vesti.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AddPlaceFormComponent } from './add-place-form/add-place-form.component';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { PlaceTableComponent } from './place-table/place-table.component';
import { PlaceUpdateComponent } from './place-update/place-update.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GalerijaComponent,
    VestiComponent,
    KontaktComponent,
    MapaComponent,
    AddPlaceFormComponent,
    PlaceTableComponent,
    PlaceUpdateComponent,
    LoginComponent,
    AdminComponent,
    LogoutComponent,
    DashboardComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdCvAo9HztNq7CFBRcid3l8ap8bEiGM3E'}),
      HttpClientModule
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
