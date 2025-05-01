import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-imagen.component.html',
  styleUrls: ['./producto-imagen.component.scss']
})
export class ProductoImagenComponent {
  @Input() imagenUrl: string = '';
  @Input() alt: string = 'Imagen del producto';
}
