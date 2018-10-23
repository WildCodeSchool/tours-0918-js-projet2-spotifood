import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { GallerieService } from '../common/gallerie.service';
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

  constructor(private serviceAdmin: GallerieService, private modalService: NgbModal, private loggingService: LoggingService) {}

  ngOnInit() {
    this.products = this.serviceAdmin.get();
    this.adminLogged = this.loggingService.getLogStatus();
  }

  //open a modal, so as to ask the admin to confirm whether he wants to delete the product.
  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result
    .then(result => {
      this.delete(id);
    })
  }
  
  //remove the product with the given id from the database.
  delete(id) {
    this.serviceAdmin.delete(id);
  }
}
