import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FotoPokemonComponent } from './component/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from './component/tarjeta-pokemon/tarjeta-pokemon.component';
import { DetallesComponent } from './component/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FotoPokemonComponent,
    TarjetaPokemonComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
