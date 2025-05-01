import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    LayoutModule
  ],
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})

export class ProductListComponent {
  productos: any[] = [];
  cols = 4; // para grid

  constructor(private productoService: ProductService, private router: Router) {
    this.productos = this.productoService.getAllProductos();
  }

  verDetalle(producto: any) {
    console.log('Navegar al producto:', producto);
    this.router.navigate(['/detalle', producto.id]);
  }
}
