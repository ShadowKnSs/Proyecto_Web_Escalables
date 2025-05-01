import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
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
    ProductoValoracionComponent,
  ],
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductService
  ) {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const encontrado = this.productoService.getProductoPorId(id);
    if (encontrado) {
      this.producto = encontrado;
    } else {
      console.error(`Producto con ID ${id} no encontrado`);
    }
  }

  onAgregarAlCarrito(cantidad: number) {
    console.log(`Añadido al carrito: ${cantidad} unidad(es)`);
  }
}
