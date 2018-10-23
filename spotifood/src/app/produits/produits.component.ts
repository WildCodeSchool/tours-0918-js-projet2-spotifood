import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  productToDisplay: string;

  constructor() { }

  ngOnInit() {
  }

  tellListToDisplayProduct(name) {
    this.productToDisplay = name;
  }

}
