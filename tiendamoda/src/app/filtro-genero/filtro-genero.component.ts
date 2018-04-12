import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-genero',
  templateUrl: './filtro-genero.component.html',
  styleUrls: ['./filtro-genero.component.css']
})
export class FiltroGeneroComponent implements OnInit {
  productosObservable: Observable<any[]>;
  genero: string;

  constructor(private service: ProductoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productosObservable = this.getProductos();

    this.route.params
    .subscribe(params => {
      this.genero = params['genero'].toString();
      console.log("Genero: " + this.genero);
    });
  }

  getProductos(){
    return this.service.getProductos();  
   }


}
