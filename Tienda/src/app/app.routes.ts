import { Routes } from '@angular/router';
import { ProductoDetalleComponent } from './Vistas/producto-detalle/producto-detalle.component';
import { ProductListComponent } from './Components/product-list-component/product-list-component.component';

export const routes: Routes = [
    {
      path: '',
      component: ProductListComponent
    },
    {
      path: 'detalle/:id',
      component: ProductoDetalleComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
  ];