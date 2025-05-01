import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productos = [
      
    {
      id: 1,
      nombre: 'Laptop HP 14"',
      descripcion: 'Una laptop diseñada para estudiantes y profesionales.',
      detalles: 'Procesador Ryzen 5, 8GB RAM, 256GB SSD, Pantalla FHD',
      imagen: 'https://m.media-amazon.com/images/I/81cWWjt9KRL.jpg',
      stock: 12,
      valoracion: 4.3,
      metodosPago: ['Visa', 'MasterCard', 'PayPal', 'Oxxo'],
      precio: 11500
    },
    {
      id: 2,
      nombre: 'Calculadora Científica Casio',
      descripcion: 'Ideal para exámenes universitarios.',
      detalles: 'Modelo FX-991ES PLUS, pantalla natural, energía dual',
      imagen: 'https://www.adosa.com.mx/media/catalog/product/cache/4db89bde2062a3745aaded91f69a9032/1/9/195204_2.jpg',
      stock: 5,
      valoracion: 4.6,
      metodosPago: ['Visa', 'PayPal'],
      precio: 530
    },
    {
      id: 3,
      nombre: 'Libro de Física',
      descripcion: 'Fundamentos de física universitaria.',
      detalles: 'Autor: Sears y Zemansky. Edición: 12. Editorial: Pearson.',
      imagen: 'https://gandhi.vtexassets.com/arquivos/ids/4051955/9780241501122.jpg?v=638430195064970000',
      stock: 0,
      valoracion: 4.1,
      metodosPago: ['Visa', 'Oxxo'],
      precio: 350
    },
    {
        id: 4,
        nombre: 'Laptop HP 14"',
        descripcion: 'Una laptop diseñada para estudiantes y profesionales.',
        detalles: 'Procesador Ryzen 5, 8GB RAM, 256GB SSD, Pantalla FHD',
        imagen: 'https://m.media-amazon.com/images/I/81cWWjt9KRL.jpg',
        stock: 12,
        valoracion: 4.3,
        metodosPago: ['Visa', 'MasterCard', 'PayPal', 'Oxxo'],
        precio: 11500
      },
      {
        id: 5,
        nombre: 'Calculadora Científica Casio',
        descripcion: 'Ideal para exámenes universitarios.',
        detalles: 'Modelo FX-991ES PLUS, pantalla natural, energía dual',
        imagen: 'https://www.adosa.com.mx/media/catalog/product/cache/4db89bde2062a3745aaded91f69a9032/1/9/195204_2.jpg',
        stock: 5,
        valoracion: 4.6,
        metodosPago: ['Visa', 'PayPal'],
        precio: 530
      },
      {
        id: 6,
        nombre: 'Libro de Física',
        descripcion: 'Fundamentos de física universitaria.',
        detalles: 'Autor: Sears y Zemansky. Edición: 12. Editorial: Pearson.',
        imagen: 'https://gandhi.vtexassets.com/arquivos/ids/4051955/9780241501122.jpg?v=638430195064970000',
        stock: 0,
        valoracion: 4.1,
        metodosPago: ['Visa', 'Oxxo'],
        precio: 350
      },
  ];

  constructor() {}

  getAllProductos() {
    return this.productos;
  }

  getProductoPorId(id: number) {
    return this.productos.find(p => p.id === id);
  }
}
