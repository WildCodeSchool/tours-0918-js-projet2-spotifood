import { Injectable } from '@angular/core';
import carrousel from './carrousel';
import { ModelCarrousel } from '../models/carrousel';

@Injectable({
  providedIn: 'root'
})
export class CarrouselServiceService {

  changeCarrousel: ModelCarrousel[];

  constructor() {
    if (!localStorage.ForCarrousel) {
      this.changeCarrousel = carrousel.map((x) => {

        const change = new ModelCarrousel();

        change.name = x['name'];
        change.id = x['id'];
        change.allergens = x['allergens'];
        change.images = x['images'];
        change.ingredients = x['ingredients'];
        change.quantity = x['quantity'];
        change.packaging = x['packaging'];
        change.nutriscore = x['nutriscore'];
        change.brands = x['brands'];
        change.categories = x['categories'];
        change.labels = x['labels'];


        return change;
      });
      this.saveToLocalStorage(this.changeCarrousel);

    } else {
      const data = JSON.parse(localStorage.ForCarrousel);
      this.changeCarrousel = data;
    }
   }

   saveToLocalStorage(changeCarrousel) {
    const data = JSON.stringify(changeCarrousel);
    localStorage.setItem('CarrouselItem', data);
  }

  get(): ModelCarrousel[] {
    return this.changeCarrousel;
  }

  add(add: ModelCarrousel) {
    this.changeCarrousel.push(add);
    this.saveToLocalStorage(this.changeCarrousel);
  }

  remove(add: ModelCarrousel) {
    const index = this.changeCarrousel.findIndex(x => x.id = ModelCarrousel);
    this.changeCarrousel.splice(index, 1);
    this.saveToLocalStorage(this.changeCarrousel);
  }

}
