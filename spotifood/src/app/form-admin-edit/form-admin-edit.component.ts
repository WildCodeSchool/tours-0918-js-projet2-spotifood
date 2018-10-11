import { Component, OnInit } from '@angular/core';
import { FormService } from '../common/form.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../models/product';


@Component({
  selector: 'app-form-admin-edit',
  templateUrl: './form-admin-edit.component.html',
  styleUrls: ['./form-admin-edit.component.css']
})
export class FormAdminEditComponent implements OnInit {

  // produit à créer
  product: Product = new Product();

  constructor(private formService: FormService, private route: ActivatedRoute, private router: Router,
  private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  add() {
    this.formService.add(this.product);
  }

  update() {
    this.formService.update(this.product);
  }

  getProduct(id): void {
    this.product =  this.formService.getProduct(id);
  }

}
