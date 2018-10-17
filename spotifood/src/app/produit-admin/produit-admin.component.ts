import { Component, OnInit } from '@angular/core';
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
  adminLogged: boolean;

  constructor(private serviceAdmin: GallerieService, private loggingService: LoggingService) {}

  ngOnInit() {
    this.products = this.serviceAdmin.get();
    this.adminLogged = this.loggingService.getLogStatus();
}
  delete(id) {
    this.serviceAdmin.delete(id);
  }
}
