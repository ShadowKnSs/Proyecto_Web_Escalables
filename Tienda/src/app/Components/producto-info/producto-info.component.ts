import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-info.component.html',
  styleUrls: ['./producto-info.component.scss']
})
export class ProductoInfoComponent {
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() detalles: string = '';
  @Input() stock: number = 0;
}
