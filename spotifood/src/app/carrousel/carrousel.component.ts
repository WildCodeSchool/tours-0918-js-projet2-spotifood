import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { ModelCarrousel } from '../models/carrousel';
import { CarrouselServiceService } from '../common/carrousel-service.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  visible: boolean;
  products: Product[];
  topProducts: Product[];
  carrousel: ModelCarrousel[];

  @Output()
  productDisplay = new EventEmitter();

  constructor(private service: CarrouselServiceService) {}

  ngOnInit() {
    this.carrousel = this.service.get();
    this.visible = true;
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
