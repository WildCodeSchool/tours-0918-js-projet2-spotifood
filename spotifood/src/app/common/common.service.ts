import { Injectable } from '@angular/core';
import products from './products';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  products: any[];

  constructor() {
    if (!localStorage.products) {

      this.products = products;
      this.saveToLocalStorage(this.products);

    } else {
      const data = JSON.parse(localStorage.products);
      this.products = data;
    }
  }

  get() {
      return this.products;

  }

  /**
   * Mise à jour du local storage avec la liste "todos"
   * @param products
   */
  saveToLocalStorage(products) {
    const data = JSON.stringify(products);
    localStorage.setItem('products', data);
  }
}
