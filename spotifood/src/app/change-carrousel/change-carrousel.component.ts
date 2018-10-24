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
  checked: boolean;

  constructor(private service: CarrouselServiceService, private Productservice: ProductService) {
    this.isChecked = true;
   }

  ngOnInit() {
    this.service.get();
    this.products = this.Productservice.get();
    console.log(this.checked);

  }


  change() {
    // if (this.products.isChecked === false) {
    //   this.service.add(this.products.isChecked);
    //   console.log(this.isChecked);
    // }
  }

  checkProduct(produit: Product, isChecked: boolean) {
    const changeCarrousel = new ModelCarrousel();
    this.service.add(changeCarrousel);
    console.log(produit);
  }

}
