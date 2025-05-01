import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ProductoImagenComponent} from '../../Components/producto-imagen/producto-imagen.component';
import { ProductoInfoComponent } from '../../Components/producto-info/producto-info.component';
import { ProductoCarritoComponent } from '../../Components/producto-carrito/producto-carrito.component';
import { ProductoPagoComponent } from '../../Components/producto-pago/producto-pago.component';
import { ProductoValoracionComponent } from '../../Components/producto-valoracion/producto-valoracion.component';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [
    CommonModule,
    ProductoImagenComponent,
    ProductoInfoComponent,
    ProductoCarritoComponent,
    ProductoPagoComponent,
    ProductoValoracionComponent
  ],
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent {
  producto = {
    id: 1,
    nombre: 'Laptop HP 14"',
    descripcion: 'Una laptop diseñada para estudiantes y profesionales.',
    detalles: 'Procesador Ryzen 5, 8GB RAM, 256GB SSD, Pantalla FHD',
    imagen: 'https://via.placeholder.com/600x400.png?text=Producto',
    stock: 12,
    valoracion: 4.3,
    metodosPago: ['Visa', 'MasterCard', 'PayPal', 'Oxxo'],
  };

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID recibido:', id);

  }

  onAgregarAlCarrito(cantidad: number) {
    console.log(`Añadido al carrito: ${cantidad} unidad(es)`);
  }
}
