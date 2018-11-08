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

  checkProduct(produit: Product) {
    produit.isSelected = true;
    this.service.add(produit);
    this.Productservice.update(produit);
  }

  delete(produit: Product) {
      this.service.remove(produit);
      produit.isSelected = false;
      this.Productservice.update(produit);
  }
}
