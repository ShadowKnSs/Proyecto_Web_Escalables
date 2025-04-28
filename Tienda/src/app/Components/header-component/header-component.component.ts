import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-header',
  standalone: true,   // <- Muy importante para Standalone Components
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    
  ],
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;
  nombreUsuario = '';

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn.subscribe(status => this.isLoggedIn = status);
    this.authService.currentUsername.subscribe(name => this.nombreUsuario = name);
  }

  onLogin() {
    // Aquí podrías abrir un modal de login o redirigir a página login
    this.authService.login('UsuarioDemo');
  }

  onLogout() {
    this.authService.logout();
  }
}