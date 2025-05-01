import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-producto-valoracion',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './producto-valoracion.component.html',
  styleUrls: ['./producto-valoracion.component.scss']
})
export class ProductoValoracionComponent {
  @Input() valoracion: number = 0; 
  Math = Math;
}
