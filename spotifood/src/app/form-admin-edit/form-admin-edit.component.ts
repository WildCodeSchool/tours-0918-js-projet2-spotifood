import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  closeResult: string;

  constructor(private formService: GallerieService, private route: ActivatedRoute, private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openmodif(contentmodif) {
    this.modalService.open(contentmodif, {ariaLabelledBy: 'modal-basic-title-modif'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

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



  

