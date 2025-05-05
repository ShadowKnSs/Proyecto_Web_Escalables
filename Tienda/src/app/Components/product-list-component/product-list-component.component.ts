import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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

  constructor(
    private productoService: ProductService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.productos = this.productoService.getAllProductos();

    this.breakpointObserver.observe([
      Breakpoints.XSmall, // <600px
      Breakpoints.Small,  // 600px - 959px
      Breakpoints.Medium, // 960px - 1279px
      Breakpoints.Large,  // 1280px - 1919px
      Breakpoints.XLarge  // >1920px
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.cols = 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.cols = 2;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.cols = 3;
      } else {
        this.cols = 4;
      }
    });
  }

  verDetalle(producto: any) {
    this.router.navigate(['/detalle', producto.id]);
  }
}
