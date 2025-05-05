import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string>('');
  private role = new BehaviorSubject<string>('');

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get currentUsername() {
    return this.username.asObservable();
  }

  get currentRole() {
    return this.role.asObservable();
  }

  login(nombre: string, rol: 'admin' | 'cliente') {
    this.loggedIn.next(true);
    this.username.next(nombre);
    this.role.next(rol); // 👈 Nuevo
  }

  logout() {
    this.loggedIn.next(false);
    this.username.next('');
    this.role.next('');
  }
}

