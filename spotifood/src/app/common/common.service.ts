import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  products: any[];

  constructor() {
    if (!localStorage.products) {

      this.products = [];

    } else {
      const data = JSON.parse(localStorage.products);
      this.products = data;
    }
  }

  get() {
      return this.products;
  }

}
