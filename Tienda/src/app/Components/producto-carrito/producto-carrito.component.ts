import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-producto-carrito',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './producto-carrito.component.html',
  styleUrls: ['./producto-carrito.component.scss']
})
export class ProductoCarritoComponent {
  @Input() stock: number = 0;
  @Output() addToCart = new EventEmitter<number>();

  cantidad: number = 1;

  aumentar() {
    if (this.cantidad < this.stock) this.cantidad++;
  }

  disminuir() {
    if (this.cantidad > 1) this.cantidad--;
  }

  anadir() {
    this.addToCart.emit(this.cantidad);
  }
}
