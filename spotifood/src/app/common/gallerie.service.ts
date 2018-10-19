import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import products from './products';
import { Nutrients } from '../models/nutriments';


@Injectable({
  providedIn: 'root'
})
export class GallerieService {

  products: Product[]; // tableau de produits
  categories: any[];
  categoriesTotal: string[];
  selectedCategorie: string;
  selectedMarque: string;
  selectedAllergene: string;
  selectedPackaging: string;

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
    element.id = Date.now();

    element.name = element.name.charAt(0).toUpperCase() + element.name.slice(1).toLowerCase();
    element.brands = element.brands.charAt(0).toUpperCase() + element.brands.slice(1).toLowerCase();
    // tslint:disable-next-line:curly
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
      return w;
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
    const produit = this.products.find(product => product.id === id);
    const index = this.products.indexOf(produit);
    this.products.splice(index, 1);
    this.saveToLocalStorage(this.products);
  }

  getProduitByCategorie(categorie): Product[] {
    const arrayTri = this.products.filter((product) => {
      if (product.categories && product.categories.includes(categorie)) {
            return product;
      }
    });
      return arrayTri;
  }
  getProductByMarque(marque: string): Product[] {
    const arrayTri = this.products.filter((product) => product.brands === marque);
    return arrayTri;
  }
  getProductByAllergene(allergene: string) {
    const arrayTri = this.products.filter((product) => {
      if (product.allergens && product.allergens.includes(allergene)) {
        return product;
      }
    });
    return arrayTri;
  }

  getProductByPackaging(packaging: string) {
    const arrayTri = this.products.filter((product) => {
      if (product.packaging && product.packaging.includes(packaging)) {
        return product;
      }
    });
    return arrayTri;
  }
  getProductByScore(score: string) {
    const arrayTri = this.products.filter((product) => product.nutriscore === score);
    return arrayTri;
  }

  getCategories(): string[] {
    this.categories = this.products.map((product) => {
        const categorie: string [] = product.categories;
        return categorie;
    });
    return this.categories;

  }

  tableauCategorie(categories) {
    categories = categories.join(',');
    categories = categories.split(',');
    return categories;
  }

  categorieUnique(categoriesTotal) {
    return categoriesTotal.sort().filter((item, pos, ary) => {
    return !pos || item !== ary[pos - 1];
  });
}

  changeSelectedCategorie(newSelecetedCategorie: string) {
    this.selectedCategorie = newSelecetedCategorie;
    return this.selectedCategorie;
  }

  changeSelectedMarque(marque: string) {
    this.selectedMarque = marque;
    return this.selectedMarque;
  }

  changeSelectedAllergene(allergene: string) {
    this.selectedAllergene = allergene;
    return this.selectedAllergene;
  }
  changeSelectedPackaging(packaging: string) {
    this.selectedPackaging = packaging;
    return this.selectedPackaging;
  }



  /**
   * for the navbar's search field
   */
  dispProduct(name): Product[] {
    const arrayTri = this.products.filter((product) => {
      if (product.name && product.name.includes(name)) {
            return product;
      }
    });
    return arrayTri;
  }
}

