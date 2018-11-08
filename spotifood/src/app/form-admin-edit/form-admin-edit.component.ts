import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../models/product';
import { Nutrients } from '../models/nutriments';
import { ProductService } from '../common/product.service';
import { LoggingService } from '../common/logging.service';

@Component({
  selector: 'app-form-admin-edit',
  templateUrl: './form-admin-edit.component.html',
  styleUrls: ['./form-admin-edit.component.css']
})
export class FormAdminEditComponent implements OnInit {

  // produit à créer
  product: Product = new Product();
  products: Product[];
  addForm: boolean;
  closeResult: string;
  adminLogged: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private formService: ProductService, private route: ActivatedRoute, private modalService: NgbModal, private loggingService: LoggingService) { }
// Confirmation d'ajout d'un produit.
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
// Confirmation de modification de produit.
  openmodif(contentmodif) {
    this.modalService.open(contentmodif, {ariaLabelledBy: 'modal2'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  ngOnInit() {
    // Recuperation de l'ID dans l'URL.
    if (this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.getProduct(id);
      this.addForm = false;
    } else {
      this.addForm = true;
      this.product = new Product();
      this.product.nutrients = new Nutrients();
    }

    this.adminLogged = this.loggingService.getLogStatus();

    this.products = this.formService.get();
  }

  add() {
    // Methode d'ajout de produit.
    this.formService.add(this.product);
    this.product = new Product();
    this.product.nutrients = new Nutrients();
  }

  update() {
    // Methode mise à jour de produit.
    this.formService.update(this.product);

  }

  getProduct(id): void {
    // Recuperation de l'id d'un produit.
    this.product = this.formService.getProduct(id);
  }

}
