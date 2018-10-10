import { Component, OnInit } from '@angular/core';
import { FormService } from '../common/form.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-form-admin-add',
  templateUrl: './form-admin-add.component.html',
  styleUrls: ['./form-admin-add.component.css']
})
export class FormAdminAddComponent implements OnInit {

  // liste des services à afficher
  products: any[];
  // produit à créer
  product: any = {
    nutriments: {}
  };
  constructor(private FormService: FormService) { }

  ngOnInit() {
  }

  add() {
    this.FormService.add(this.product);
    this.product = new Product();
  }

}
