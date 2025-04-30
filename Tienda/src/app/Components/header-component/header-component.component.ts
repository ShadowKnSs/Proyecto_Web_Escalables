import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule
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
    this.authService.login('UsuarioDemo');
  }

  onLogout() {
    this.authService.logout();
  }
}
