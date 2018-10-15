import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../models/product';
import { Nutrients } from '../models/nutriments';
import { Alert } from 'selenium-webdriver';
import { GallerieService } from '../common/gallerie.service';

@Component({
  selector: 'app-form-admin-edit',
  templateUrl: './form-admin-edit.component.html',
  styleUrls: ['./form-admin-edit.component.css']
})
export class FormAdminEditComponent implements OnInit {

  // produit à créer
  product: Product = new Product();
  addForm: boolean;

  constructor(private formService: GallerieService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.getProduct(id);
      this.addForm = false;
    } else {
      this.addForm = true;
      this.product = new Product();
      this.product.nutrients = new Nutrients();
    }
  }

  add() {
    this.formService.add(this.product);
    this.product = new Product();
    this.product.nutrients = new Nutrients();
  }

  update() {
    this.formService.update(this.product);
    alert('La fiche a bien été modifiée');
  }

  getProduct(id): void {
    this.product =  this.formService.getProduct(id);
  }

}
