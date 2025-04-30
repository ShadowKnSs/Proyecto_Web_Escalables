import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-filter-nav',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="filter-nav-wrapper" [@fadeIn]>
      <mat-tab-group (selectedIndexChange)="onTabChange($event)">
        <mat-tab *ngFor="let f of filtros" [label]="f"></mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [
    `.filter-nav-wrapper {
      padding: 10px 20px;
      background-color: #ffffff; /* Fondo blanco */
    }

    mat-tab-group {
      background-color: transparent;
      color: #005FAB;
    }

    ::ng-deep .mat-tab-label {
      font-weight: bold;
      color: #005FAB;
    }

    ::ng-deep .mat-tab-label:hover {
      color: #4ECDC4; /* Turquesa al pasar el mouse */
    }

    ::ng-deep .mat-tab-label.mat-tab-label-active {
      color: #4ECDC4; /* Turquesa cuando está activo */
    }

    ::ng-deep .mat-ink-bar {
      background-color: #4ECDC4; /* Línea activa turquesa */
    }`
  ]
})
export class FilterNavComponent {
  @Output() filterChange = new EventEmitter<string>();
  filtros = ['Todos','Libros','Tecnología','Papelería','Ofertas','Nuevos'];

  onTabChange(index: number) {
    this.filterChange.emit(this.filtros[index]);
  }
}