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
        change.photo = x['photo'];

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

  }

}
