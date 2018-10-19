import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import products from './products';
import { Nutrients } from '../models/nutriments';

@Injectable({
  providedIn: 'root'
})
export class GallerieService {

  products: Product[]; // tableau de produits

    constructor() {
    if (!localStorage.products) {
      // Initialisation du local storage et du tableau products avec tableau des produits
      this.products = products.map((x) => {

        const product = new Product();

        product.id = x.id;
        product.name = x.product_name;
        product.quantity = x.quantity;
        product.brands = x.brand;
        product.labels = x.labels;
        product.categories = x.categories;
        product.packaging = x.packaging;
        product.ingredients =  x.ingredients;
        product.allergens = x.allergenes;
        product.nutriscore = x.nutriscore;
        product.images = x.image;

        product.nutrients = new Nutrients();

        if (x.nutritional_value) {
          product.nutrients.lipids = +x.nutritional_value.lipides;
          product.nutrients.sugars = +x.nutritional_value.sugar;
          product.nutrients.saturated = +x.nutritional_value.saturated_fat;
          product.nutrients.salt = +x.nutritional_value.salt;
        }

        return product;
      });
      this.saveToLocalStorage(this.products);

    } else {
      // Si le tableau Products existe déjà dans le local storage, enregistrer les données correspondantes dans this.products
      const data = JSON.parse(localStorage.products);
      this.products = data;
    }
  }


  saveToLocalStorage(product) {
    const data = JSON.stringify(product);
    localStorage.setItem('products', data);
  }
  get(): Product[] {
    return this.products;
  }

  add(element) {
    element.id = this.products.length;
    this.products.push(element);
    this.saveToLocalStorage(this.products);
  }

  update(element) {
    const index = this.products.indexOf(element);
    this.products[index] = element;
    this.saveToLocalStorage(this.products);
  }

  getProduct(id: string) {
    // tslint:disable-next-line:triple-equals
    return this.products.find(product => product.id == id);
  }

  delete(id): void {
    const produit = this.products.find(product => product.id == id);
    const index = this.products.indexOf(produit);
    this.products.splice(index, 1);
    this.saveToLocalStorage(this.products);

  }
}





