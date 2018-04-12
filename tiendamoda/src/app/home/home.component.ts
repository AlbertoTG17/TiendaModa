import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productosObservable: Observable<any[]>;

  constructor(private service: ProductoService) { }

  ngOnInit() {
    this.productosObservable = this.getProductos();
  }

  getProductos(){
    return this.service.getProductos();
  }

}
