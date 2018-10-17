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

    element.name = element.name.charAt(0).toUpperCase() + element.name.slice(1).toLowerCase();
    element.brands = element.brands.charAt(0).toUpperCase() + element.brands.slice(1).toLowerCase();
    if (element.labels) element.labels = this.capitalize(element.labels);
    element.categories = this.capitalize(element.categories);
    element.packaging = this.capitalize(element.packaging);
    element.allergens = this.capitalize(element.allergens);

    this.products.push(element);
    this.saveToLocalStorage(this.products);
  }

  capitalize(str) {
    return str.split(',').map(w => {
      w = w.trim();
      w = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      return w
    }).join(',');
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





