import { Component, OnInit } from '@angular/core';
import { FormService } from '../common/form.service';
import { Product } from '../models/product';
import { Nutrients } from '../models/nutriments';

@Component({
  selector: 'app-form-admin-add',
  templateUrl: './form-admin-add.component.html',
  styleUrls: ['./form-admin-add.component.css']
})
export class FormAdminAddComponent implements OnInit {
  // produit à créer
  product: Product = new Product();

  constructor(private formService: FormService) { }

  ngOnInit() {
  }

  add() {
    this.formService.add(this.product);
    this.product = new Product();
  }

}
