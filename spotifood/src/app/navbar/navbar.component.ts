import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { GallerieService } from '../common/gallerie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  products: Product[];
  constructor(private service: GallerieService) { }

  ngOnInit() {
    this.products = this.service.get();
  }

}


