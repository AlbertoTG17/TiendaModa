import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  local: String;	//localstorage
  carrito: any[];
  //products: Producto[] = [];  //lo que va a revoger el html
  total: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    //this.local = localStorage.getItem("carrito") === null ? "" : localStorage.getItem("carrito");
    if(localStorage.getItem("carrito")!==null && localStorage.getItem("carrito").length>10){
      this.carrito = JSON.parse(localStorage.getItem("carrito"));
      for(let product of this.carrito){
        this.total += product.precio * product.unidades;
      }

    }else{
      console.log("Carrito vacio");
    }

  }

  limpiarCarrito(){
    localStorage.removeItem("carrito");
    this.router.navigateByUrl("/");
  }

}
