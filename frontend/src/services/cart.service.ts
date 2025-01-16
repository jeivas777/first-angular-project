import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProductsSubject = new BehaviorSubject<any[]>([]);
  cartProducts$ = this.cartProductsSubject.asObservable();

  constructor() {}

  addToCart(product: any, selectedSize: String): void {
    const currentCart = this.cartProductsSubject.value;

    product['selectedSize'] = selectedSize;

    this.cartProductsSubject.next([...currentCart, product]);
  }

  getCartProducts(): any {
    return this.cartProductsSubject.value;
  }
}
