import { Injectable } from '@angular/core';
import {Produits} from '../models/product';
import products from './tableau-produits';
import {Nutriments} from '../models/nutriments';

@Injectable({
  providedIn: 'root'
})
export class GallerieService {

  product: Produits[]; // tableau de produits

    constructor() {
    if (!localStorage.product) {
      // Initialisation du local storage et du tableau products avec tableau des produits
      this.product = products.map((x) => {

        const product = new Produits();

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

        product.nutriments = new Nutriments();

        if (x.nutriments) {
          product.nutriments.lipids = +x.nutriments['fat_100g'];
          product.nutriments.sugars = +x.nutriments['sugars_100g'];
          product.nutriments.saturated = +x.nutriments['saturated-fat_100g'];
          product.nutriments.salt = +x.nutriments['salt_100g'];
        }

        return product;
      });
      this.saveToLocalStorage(this.product);

    } else {
      // Si le tableau Products existe déjà dans le local storage, enregistrer les données correspondantes dans this.products
      const data = JSON.parse(localStorage.product);
      this.product = data;
    }
  }


  saveToLocalStorage(product) {
    const data = JSON.stringify(product);
    localStorage.setItem('product', data);
  }
  get(): Produits[] {
    return this.product;

  }
}





