import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  products: any[];
  constructor() {
    const data = JSON.parse(localStorage.products);
    this.products = data;
  }

  add(element) {
    element.id = this.products.length;
    this.products.push(element);
    this.saveToLocalStorage(this.products);
  }

  saveToLocalStorage(products) {
    const data = JSON.stringify(products);
    localStorage.setItem('products', data);
  }
}
