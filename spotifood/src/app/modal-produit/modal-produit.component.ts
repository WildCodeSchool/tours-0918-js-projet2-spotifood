import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-produit',
  templateUrl: './modal-produit.component.html',
  styleUrls: ['./modal-produit.component.css']
})
export class ModalProduitComponent implements OnInit {

  @Input()
 productModal: any;

 @Input()
 modalInput: any;
  constructor() { }

  ngOnInit() {
  }


}
