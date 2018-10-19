import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GallerieService } from '../common/gallerie.service';
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

  constructor(private service: GallerieService) {}

  show() {
    this.visible = !this.visible;
  }

  ngOnInit() {
    this.visible = true;
    this.products = this.service.get();
    this.topProducts = [this.products[17], this.products[7], this.products[13]];
  }


  displayProduct(productName) {
    this.productDisplay.emit(productName);
  }

}
