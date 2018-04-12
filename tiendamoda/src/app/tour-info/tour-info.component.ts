import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-tour-info',
  templateUrl: './tour-info.component.html',
  styleUrls: ['./tour-info.component.css']
})
export class TourInfoComponent implements OnInit {

  productosObservable: Observable<any[]>;
  id: string;
  unidades: number = 1;
  //listaProductosAñadidos: Array<Producto> = new Array;
  carrito:any[];
  mensaje: string;

  constructor(private service: ProductoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productosObservable = this.getProductos();
    this.mensaje = ""

    this.route.params //recupera el parametro id 
    .subscribe(params => {
      this.id = params['id'].toString();
      console.log("id: " + this.id);
    });
    
    this.carrito = JSON.parse(localStorage.getItem("carrito"))===null ? [] : JSON.parse(localStorage.getItem("carrito"));

  }

  getProductos(){
   return this.service.getProductos();  
  }

  printPDF(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`<body onload="window.print();window.close()">${printContents}</body>`);
    popupWin.document.close();
  }

  addCart(producto, unid){

     //si aun no hay nada en el carrito

      console.log("Entra por if");

      let p: Producto = producto;
      let unidades = unid.value;
      p.unidades = unidades;  //lo coje como string !!!!
      this.carrito.push(p);

      //localStorage.setItem("carrito", JSON.stringify(this.listaProductosAñadidos));
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
      this.mensaje = "Has añadido " + p.unidades + " unidad(es) de " + p.nombre;



    
 
  }

}
