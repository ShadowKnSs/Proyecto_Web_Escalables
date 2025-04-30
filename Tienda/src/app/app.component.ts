import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header-component/header-component.component';
import { ProductListComponent } from './Components/product-list-component/product-list-component.component';
import { FilterNavComponent } from './Components/filter-nav/filter-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,ProductListComponent, FilterNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tienda';

  currentFiltro = 'Todos';

  onFilterChange(filtro: string) {
    this.currentFiltro = filtro;
    console.log('Filtro seleccionado:', filtro);
  }
}
