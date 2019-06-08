import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PutovanjaComponent } from './putovanja/putovanja.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { VodicComponent } from './vodic/vodic.component';
import { VestiComponent } from './vesti/vesti.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AddPlaceFormComponent } from './add-place-form/add-place-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PutovanjaComponent,
    GalerijaComponent,
    VodicComponent,
    VestiComponent,
    KontaktComponent,
    AddPlaceFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
