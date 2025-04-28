import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string>('');

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get currentUsername() {
    return this.username.asObservable();
  }

  login(nombre: string) {
    this.loggedIn.next(true);
    this.username.next(nombre);
  }

  logout() {
    this.loggedIn.next(false);
    this.username.next('');
  }
}

