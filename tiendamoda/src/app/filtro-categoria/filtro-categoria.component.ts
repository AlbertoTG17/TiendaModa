import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-categoria',
  templateUrl: './filtro-categoria.component.html',
  styleUrls: ['./filtro-categoria.component.css']
})
export class FiltroCategoriaComponent implements OnInit {
  productosObservable: Observable<any[]>;
  categoria: string;

  constructor(private service: ProductoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productosObservable = this.getProductos();

    this.route.params
    .subscribe(params => {
      this.categoria = params['categoria'].toString();
      console.log("Categoria: " + this.categoria);
    });
  }

  getProductos(){
    return this.service.getProductos();  
   }

}
