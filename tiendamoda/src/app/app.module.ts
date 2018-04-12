import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InsertarComponent } from "./insertar/insertar.component";
import { RegistroComponent } from './registro/registro.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';

import { ProductoService } from './producto.service';
import { FirebaseService } from './firebase.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { TourInfoComponent } from './tour-info/tour-info.component';
import { FiltroCategoriaComponent } from './filtro-categoria/filtro-categoria.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FiltroGeneroComponent } from './filtro-genero/filtro-genero.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ProductoInfo/:id' , component: TourInfoComponent},
  { path: 'Categoria/:categoria' , component: FiltroCategoriaComponent},
  { path: 'Genero/:genero' , component: FiltroGeneroComponent},
  { path: 'carrito' , component: CarritoComponent},
  { path: 'insertar', component: InsertarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InsertarComponent,
    RegistroComponent,
    NavbarComponent,
    TourInfoComponent,
    FiltroCategoriaComponent,
    CarritoComponent,
    FiltroGeneroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config),  //Conexion a firebase db
    AngularFireAuthModule
    
  ],
  providers: [ProductoService, FirebaseService],
  bootstrap: [AppComponent]
})

export class AppModule { }
