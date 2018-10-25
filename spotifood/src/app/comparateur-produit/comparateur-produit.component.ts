import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-comparateur-produit',
  templateUrl: './comparateur-produit.component.html',
  styleUrls: ['./comparateur-produit.component.css']
})
export class ComparateurProduitComponent implements OnInit {
  searchLeft: string;
  searchRight: string;
  products: Product[];
  productLeft: Product;
  productRight: Product;
  errorL: boolean;
  errorR: boolean;
  side = 'left';

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.products = this.service.get();
    this.searchLeft = this.products[0].name;
    this.productLeft = this.products[0];
    this.searchRight = this.products[1].name;
    this.productRight = this.products[1];
    this.errorL = false;
    this.errorR = false;
  }

  // get the product the user searched for
  recherche() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name && this.products[i].name.toLowerCase() === this.searchLeft.toLowerCase()) {
        this.productLeft = this.products[i];
        this.errorL = false;
      } else {
        this.errorL = true;
      }
      if (this.products[i].name && this.products[i].name.toLowerCase() === this.searchRight.toLowerCase()) {
        this.productRight = this.products[i];
        this.errorR = true;
      } else {
        this.errorR = true;
      }
    }
  }
}
