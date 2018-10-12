import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Nutrients } from '../models/nutriments';
import products from './products';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // déclaration du tableau products de type Product
  products: Product[];
  constructor() {
    if (!localStorage.products) {
      // Initialisation du local storage et du tableau products
      this.products = products.map((x, i) => {

        const product = new Product();
        console.log(i);
        product.id = x['_id'];
        product.name = x['product_name_fr'] ? x['product_name_fr'] : x['product_name'];
        product.quantity = x.quantity;
        product.brands = x.brands;
        product.labels = x.labels;
        product.categories = x.categories;
        product.packaging = x.packaging;
        product.store = x.stores;
        product.ingredients = x['ingredients_text_fr'] ? x['ingredients_text_fr'] : x.ingredients_text;
        product.allergens = x.allergens;
        product.nutriscore = x['nutrition_grade-fr'] ? x['nutrition_grade-fr'] : x['nutrition_grades'];

        product.nutrients = new Nutrients();

        if (x.nutriments) {
          product.nutrients.lipids = +x.nutriments['fat_100g'];
          product.nutrients.sugars = +x.nutriments['sugars_100g'];
          product.nutrients.saturated = +x.nutriments['saturated-fat_100g'];
          product.nutrients.salt = +x.nutriments['salt_100g'];
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

  saveToLocalStorage(elements) {
    const data = JSON.stringify(elements);
    localStorage.setItem('products', data);
  }

  getProduct(id: string) {
    // tslint:disable-next-line:triple-equals
    return this.products.find(product => product.id == id);
  }
}
