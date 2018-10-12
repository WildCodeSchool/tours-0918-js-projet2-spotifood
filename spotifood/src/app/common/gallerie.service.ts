import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import products from './tableau-produits';
import {Nutrients} from '../models/nutriments';

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


  saveToLocalStorage(product) {
    const data = JSON.stringify(product);
    localStorage.setItem('products', data);
  }
  get(): Product[] {
    return this.products;

  }
}





