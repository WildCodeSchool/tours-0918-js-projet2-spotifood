import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../models/product';
import { Nutrients } from '../models/nutriments';
import { GallerieService } from '../common/gallerie.service';

@Component({
  selector: 'app-comparateur',
  templateUrl: './comparateur.component.html',
  styleUrls: ['./comparateur.component.css']
})
export class ComparateurComponent implements OnInit {
  searchLeft: any;
  searchRight: any;

  products: Product[];
  productsRight: any;

  product: Product;
  productDroite: any;

  error: string;

  constructor(private service: GallerieService, private modalService: NgbModal) { }

  ngOnInit() {
    this.products = this.service.get();
    this.searchLeft = '';
    this.product = this.products[9];
    this.error = 'Ce champ est requis.' ;
  }


  recherche() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name && this.products[i].name.toLowerCase() === this.searchLeft.toLowerCase()) {
        this.product = this.products[i];
        console.log(true);
      }
    }
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
}

