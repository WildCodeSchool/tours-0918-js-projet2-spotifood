import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-comparateur',
  templateUrl: './comparateur.component.html',
  styleUrls: ['./comparateur.component.css']
})
export class ComparateurComponent implements OnInit {
  searchField: string;
  products: Product[];
  product: Product;
  error: boolean;

  @Input()
  side: string;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.products = this.service.get();
    this.searchField = this.products[0].name;
    this.product = this.products[0];
    this.error = false;
  }

  /**
   * get the product the user searched for
   */
  recherche() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name && this.products[i].name.toLowerCase() === this.searchField.toLowerCase()) {
        this.product = this.products[i];
        this.error = false;
        break;
      } else {
        this.error = true;
      }
    }
  }

  /**
   *
   * @param nutriscore display the image corresponding to the nutritional value of the product
   */
  findNutri(nutriscore) {
    let image = '';
    switch (nutriscore) {
      case 'A':
      image = '../../assets/images/nutriscore/A.png';
      break;
      case 'B':
        image = '../../assets/images/nutriscore/B.jpg';
        break;
      case 'C':
        image = '../../assets/images/nutriscore/C.png';
        break;
      case 'D':
        image = '../../assets/images/nutriscore/D.jpg';
        break;
      case 'E':
        image = '../../assets/images/nutriscore/E.svg';
        break;
      default:
        image = '../../assets/images/nutriscore/notfound.png';
        break;
    }
    return image;
  }
}

