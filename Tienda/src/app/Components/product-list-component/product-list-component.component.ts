import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';


interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}
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
  styleUrl: './product-list-component.component.scss'
})

export class ProductListComponent {
  
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop HP 14',
      descripcion: 'Laptop para estudiantes de ingeniería.',
      precio: 13500,
      imagen: 'https://m.media-amazon.com/images/I/81cWWjt9KRL.jpg'
    },
    {
      id: 2,
      nombre: 'Calculadora Científica Casio',
      descripcion: 'Calculadora ideal para exámenes universitarios.',
      precio: 750,
      imagen: 'https://www.adosa.com.mx/media/catalog/product/cache/4db89bde2062a3745aaded91f69a9032/1/9/195204_2.jpg'
    },
    {
      id: 3,
      nombre: 'Libro de Física',
      descripcion: 'Fundamentos de física universitaria.',
      precio: 580,
      imagen: 'https://gandhi.vtexassets.com/arquivos/ids/4051955/9780241501122.jpg?v=638430195064970000'
    },
    
  ];

  cols: number = 4; // columnas iniciales (escritorio)

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,  // Celular
      Breakpoints.Tablet,   // Tablet
      Breakpoints.Web       // Escritorio
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.Handset]) {
        this.cols = 1;
      } else if (result.breakpoints[Breakpoints.Tablet]) {
        this.cols = 2;
      } else if (result.breakpoints[Breakpoints.Web]) {
        this.cols = 4;
      }
    });
  }

}
