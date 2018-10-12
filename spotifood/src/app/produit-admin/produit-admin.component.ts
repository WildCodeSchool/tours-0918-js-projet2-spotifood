import { Component, OnInit } from '@angular/core';
import { GallerieService } from '../common/gallerie.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-produit-admin',
  templateUrl: './produit-admin.component.html',
  styleUrls: ['./produit-admin.component.css']
})
export class ProduitAdminComponent implements OnInit {
  products: Product[];
  page = 1;

  constructor(private serviceAdmin: GallerieService) {}

  ngOnInit() {
    this.products = this.serviceAdmin.get();
}
}
