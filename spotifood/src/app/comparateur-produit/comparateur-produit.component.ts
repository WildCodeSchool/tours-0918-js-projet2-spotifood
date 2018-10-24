import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-comparateur-produit',
  templateUrl: './comparateur-produit.component.html',
  styleUrls: ['./comparateur-produit.component.css']
})
export class ComparateurProduitComponent implements OnInit {
  left = 'left';
  right = 'right';
  rechercher: any;
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.get();
  }

}
