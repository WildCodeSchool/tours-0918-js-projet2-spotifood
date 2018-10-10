import { Component, OnInit } from '@angular/core';
import { FormService } from '../common/form.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-form-admin-edit',
  templateUrl: './form-admin-edit.component.html',
  styleUrls: ['./form-admin-edit.component.css']
})
export class FormAdminEditComponent implements OnInit {

  // liste des services à afficher
  products: any[];
  // produit à créer
  product: any = {
    nutriments: {}
  };

  constructor(private FormService: FormService, private route: ActivatedRoute, private router: Router, 
  private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.getProduct(id);
  }

  update() {
    this.FormService.update(this.product);
    this.product = {};
  }

  getProduct(id): void {
    this.FormService.getProduct(id).subscribe(product => this.product = product);
  }

}
