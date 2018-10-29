import { Component, OnInit } from '@angular/core';
import { CarrouselServiceService } from '../common/carrousel-service.service';
import { ProductService } from '../common/product.service';
import { Product } from '../models/product';
import { ModelCarrousel } from '../models/carrousel';

@Component({
  selector: 'app-change-carrousel',
  templateUrl: './change-carrousel.component.html',
  styleUrls: ['./change-carrousel.component.css']
})
export class ChangeCarrouselComponent implements OnInit {

  products: Product[];
  isChecked: boolean;

  constructor(private service: CarrouselServiceService, private Productservice: ProductService) {
    this.isChecked = false;
  }

  ngOnInit() {
    // this.service.get();
    this.products = this.Productservice.get();
  }

  checkProduct(produit: Product, isChecked: boolean) {
    this.service.add(produit);
    this.isChecked = !this.isChecked;
  }

  delete(produit: Product) {
      this.service.remove(produit);
  }
}
