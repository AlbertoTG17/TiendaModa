import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Producto } from './model/producto';

@Injectable()
export class ProductoService {

  private productosPath = '/productos';  //bd --> table
  
  productosRef: AngularFireList<Producto> = null;

  constructor(private db: AngularFireDatabase) { 
    this.productosRef= db.list(this.productosPath);
  }

  crearProducto(producto: Producto): void {
   this.productosRef.push(producto);
  }

  getProductos(){  //para la pagina home
    return this.db.list(this.productosPath).valueChanges();
  }
 



}
