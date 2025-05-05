import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./Components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./Components/product-list-component/product-list-component.component').then(m => m.ProductListComponent)
  },
  {
    path: 'detalle/:id',
    loadComponent: () =>
      import('./Vistas/producto-detalle/producto-detalle.component').then(m => m.ProductoDetalleComponent)
  }
];
