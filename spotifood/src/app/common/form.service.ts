import {
  Injectable
} from '@angular/core';
import {
  Product
} from '../models/product';
import products from './products';

import {
  Observable,
  of
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  products: any[];
  constructor() {
    if (!localStorage.products) {
      console.log('if');
      // Initialisation du local storage et du tableau products
      this.products = products;
      this.saveToLocalStorage(this.products);

    } else {
      console.log('else');

      const data = JSON.parse(localStorage.products);
      this.products = data;
    }
  }


  add(element) {
    element.id = this.products.length;
    this.products.push(element);
    this.saveToLocalStorage(this.products);
  }

  update(element) {
    this.products.push(element);
    this.saveToLocalStorage(this.products);
  }

  saveToLocalStorage(products) {
    const data = JSON.stringify(products);
    localStorage.setItem('products', data);
  }

  getProduct(id: number) {
    // tslint:disable-next-line:triple-equals
    return of(this.products.find(product => product['_id'] == id));
  }
}
