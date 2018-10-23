import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../common/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  visible: boolean;
  products: Product[];
  topProducts: Product[];

  @Output()
  productDisplay = new EventEmitter();

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.visible = true;
    this.products = this.service.get();
    this.topProducts = [this.products[17], this.products[7], this.products[13]];
  }

  // show or hide carrousel
  show() {
    this.visible = !this.visible;
  }

  // when the button is clicked, the product's name is sent to the parent component.
  // (The parent will then send this name to the product gallery)
  displayProduct(productName) {
    this.productDisplay.emit(productName);
  }

}
