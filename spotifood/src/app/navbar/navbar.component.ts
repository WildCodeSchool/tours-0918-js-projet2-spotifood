import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';
import { GallerieService } from '../common/gallerie.service';
import { LoggingService } from '../common/logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  products: Product[];
  adminLogged: boolean;
  userView: boolean;

  productName: string;

  @Output()
  productDisplay = new EventEmitter();

  constructor(private service: GallerieService, private loggingService: LoggingService, private router: Router) { }

  ngOnInit() {
    this.products = this.service.get();
    this.adminLogged = this.loggingService.getLogStatus();
  }

  goToProducts() {
    this.router.navigate(['/produits']);
  }

  displayProduct() {
    this.productDisplay.emit(this.productName);
  }

  logOut() {
    this.loggingService.logOut();
  }

  changeView() {
    if (!this.userView) {
      this.router.navigate(['/produits']);
      this.userView = true;
    } else {
      this.router.navigate(['comparateur']);
      this.userView = false;
    }
  }
}


