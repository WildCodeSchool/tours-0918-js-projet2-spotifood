import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import products from './products';
import { Nutrients } from '../models/nutriments';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
        product.ingredients = x.ingredients;
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

  /**
   * save product(s) to localStorage
   * @param product Product to save
   */
  saveToLocalStorage(product) {
    const data = JSON.stringify(product);
    localStorage.setItem('products', data);
  }

  /**
   * get all product
   */
  get(): Product[] {
    return this.products;
  }

  /**
   *create a unique identifier for the product, and store the product into the localStorage
   * @param element
   */
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

  /**
   * capitalise data inputs (for consistency)
   * @param str String to capitalize
   */
  capitalize(str) {
    return str.split(',').map(w => {
      w = w.trim();
      w = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      return w;
    }).join(',');
  }

  /**
   * after an admin changed the information on a product, save the changes to localStorage
   * @param element
   */
  update(element) {
    const index = this.products.indexOf(element);
    this.products[index] = element;
    this.saveToLocalStorage(this.products);
  }

  /**
   * find the product associated with a given id
   * @param id Product id
   */
  getProduct(id: string) {
    // tslint:disable-next-line:triple-equals
    return this.products.find(product => product.id == id);
  }

  /**
   * delete the product associated with a given id
   * @param id Product id
   */
  delete(id): void {
    const produit = this.products.find(product => product.id === id);
    const index = this.products.indexOf(produit);
    this.products.splice(index, 1);
    this.saveToLocalStorage(this.products);
  }

  /**
   * get all products associated with a given category
   * @param categorie Category name
   */
  getProduitByCategorie(categorie): Product[] {
    const arrayTri = this.products.filter((product) => {
      if (product.categories && product.categories.includes(categorie)) {
        return product;
      }
    });
    return arrayTri;
  }

  /**
   * get all products associated with a given brand
   * @param marque Brand name
   */
  getProductByMarque(marque: string): Product[] {
    const arrayTri = this.products.filter((product) => product.brands === marque);
    return arrayTri;
  }

  /**
   * get all products containing a given allergen
   * @param allergene
   */
  getProductByAllergene(allergene: string) {
    const arrayTri = this.products.filter((product) => {
      if (product.allergens && product.allergens.includes(allergene)) {
        return product;
      }
    });
    return arrayTri;
  }

  /**
   * get all products associated with a given packaging
   * @param packaging Packagin name
   *
   */
  getProductByPackaging(packaging: string) {
    const arrayTri = this.products.filter((product) => {
      if (product.packaging && product.packaging.includes(packaging)) {
        return product;
      }
    });
    return arrayTri;
  }

  /**
   * get all products associated with a given nutritional value
   * @param score Score name
   */
  getProductByScore(score: string) {
    const arrayTri = this.products.filter((product) => product.nutriscore === score);
    return arrayTri;
  }

  /**
   * create a list of all existing categories (returns multidimensional array)
   */
  getCategories(): string[] {
    this.categories = this.products.map((product) => {
      const categorie: string[] = product.categories;
      return categorie;
    });
    return this.categories;

  }

  /**
   * list all categories in a single array (returns a single array)
   * @param categories
   */
  tableauCategorie(categories) {
    categories = categories.join(',');
    categories = categories.split(',');
    return categories;
  }

  /**
   * remove duplicates
   * @param categoriesTotal
   */
  categorieUnique(categoriesTotal) {
    return categoriesTotal.sort().filter((item, pos, ary) => {
      return !pos || item !== ary[pos - 1];
    });
  }

  /**
   * change selected category
   * @param newSelecetedCategorie
   */
  changeSelectedCategorie(newSelecetedCategorie: string) {
    this.selectedCategorie = newSelecetedCategorie;
    return this.selectedCategorie;
  }

  /**
   * change selected brand
   * @param marque brand name
   */
  changeSelectedMarque(marque: string) {
    this.selectedMarque = marque;
    return this.selectedMarque;
  }

  /**
   * change selected allergen
   * @param allergene
   */
  changeSelectedAllergene(allergene: string) {
    this.selectedAllergene = allergene;
    return this.selectedAllergene;
  }

  /**
   * change selected packaging
   * @param packaging Packagin name
   */
  changeSelectedPackaging(packaging: string) {
    this.selectedPackaging = packaging;
    return this.selectedPackaging;
  }

  /**
   * display the product the user searched for
   * @param name Product name
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

