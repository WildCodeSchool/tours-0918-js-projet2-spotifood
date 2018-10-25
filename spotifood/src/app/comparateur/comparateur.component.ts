import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-comparateur',
  templateUrl: './comparateur.component.html',
  styleUrls: ['./comparateur.component.css']
})
export class ComparateurComponent implements OnInit, OnChanges {
  searchLeft: any;
  product: Product;
  products: Product[];
  error: string;

  constructor(private service: ProductService) { }

  @Input() productToDisplay: Product;
  @Input() side: string;

  ngOnInit() {
    this.products = this.service.get();
    this.product = this.productToDisplay;
  }

  // get the product the user searched for
  recherche() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name && this.products[i].name.toLowerCase() === this.searchLeft.toLowerCase()) {
        this.product = this.products[i];
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.product = this.productToDisplay;
  }

  /**
   *
   * @param nutriscore display the image corresponding to the nutritional value of the product
   */
  findNutri(nutriscore) {
    let image = '';
    console.log(nutriscore);
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

