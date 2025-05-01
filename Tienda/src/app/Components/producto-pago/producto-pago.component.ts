import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-producto-pago',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './producto-pago.component.html',
  styleUrls: ['./producto-pago.component.scss']
})
export class ProductoPagoComponent {
  @Input() metodos: string[] = ['Visa', 'MasterCard', 'PayPal', 'Oxxo'];

  obtenerIcono(metodo: string): string {
    switch (metodo.toLowerCase()) {
      case 'visa':
      case 'mastercard':
        return 'credit_card';
      case 'paypal':
        return 'account_balance_wallet';
      case 'oxxo':
        return 'store';
      case 'efectivo':
        return 'attach_money';
      default:
        return 'payment';
    }
  }
}
