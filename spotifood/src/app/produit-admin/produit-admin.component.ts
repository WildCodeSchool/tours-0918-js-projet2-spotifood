import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { ProductService } from '../common/product.service';
import { Product } from '../models/product';
import { LoggingService } from '../common/logging.service';

@Component({
  selector: 'app-produit-admin',
  templateUrl: './produit-admin.component.html',
  styleUrls: ['./produit-admin.component.css']
})
export class ProduitAdminComponent implements OnInit {
  products: Product[];
  page = 1;
  closeResult: string;
  adminLogged: boolean;
  productNameAdmin: string;
  error: boolean;

  constructor(private serviceAdmin: ProductService, private modalService: NgbModal, private loggingService: LoggingService) {}

  ngOnInit() {
    this.products = this.serviceAdmin.get();
    this.adminLogged = this.loggingService.getLogStatus();
  }

  // open a modal, so as to ask the admin to confirm whether he wants to delete the product.
  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result
    .then(result => {
      this.delete(id);
    })
  }

  // remove the product with the given id from the database.
  delete(id) {
    this.serviceAdmin.delete(id);
  }

  recherche() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name && this.products[i].name.toLowerCase() === this.productNameAdmin.toLowerCase()) {
       console.log(this.products);
       console.log(this.products[i]);
       this.products = [this.products[i]];
        this.error = false;
        break;
      } else {
        this.error = true;
      }
    }
  }

  resetList() {
    this.products = this.serviceAdmin.get();
  }
}
