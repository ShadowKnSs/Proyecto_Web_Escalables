import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header-component/header-component.component';
import { ProductListComponent } from './Components/product-list-component/product-list-component.component';
import { FilterNavComponent } from './Components/filter-nav/filter-nav.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgIf } from '@angular/common'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NgIf,RouterOutlet,HeaderComponent,ProductListComponent, FilterNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tienda';
  currentFiltro = 'Todos';
  enLogin = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.enLogin = this.router.url === '/login';
      });
  }

  onFilterChange(filtro: string) {
    this.currentFiltro = filtro;
    console.log('Filtro seleccionado:', filtro);
  }
}
