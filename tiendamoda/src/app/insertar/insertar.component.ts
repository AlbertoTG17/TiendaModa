import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

import { ProductoService } from '../producto.service';
import { Producto } from '../model/producto';



@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
}) 
export class InsertarComponent implements OnInit {

  producto: Producto = new Producto();
  submitted = false;

  constructor(private productoService: ProductoService, public firebaseService: FirebaseService) {}

//insertar nuevp tour
nuevoTour(): void {
  this.submitted = false;
  this.producto = new Producto();
}

saveTour() {
  this.productoService.crearProducto(this.producto);
  this.producto = new Producto();
}

onSubmit() {
  this.submitted = true;
  this.saveTour();
}


ngOnInit() {
    
}

  

}
