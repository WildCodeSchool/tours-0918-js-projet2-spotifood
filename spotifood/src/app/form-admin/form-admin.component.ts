import { Component, OnInit } from '@angular/core';
import { FormService } from '../common/form.service';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {

  // liste des services à afficher
  products: any[];
  // produit à créer
  product: any = {};

  constructor(private FormService: FormService) { }

  ngOnInit() {
  }

  add() {
    this.FormService.add(this.product);
    this.product = {};
  }

}
