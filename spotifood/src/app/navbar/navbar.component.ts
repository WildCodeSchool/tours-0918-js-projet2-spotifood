import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../common/product.service';
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
  href: string;
  productName: string;
  isCollapsed: Boolean = false;

  @Output()
  productDisplay = new EventEmitter();

  constructor(private service: ProductService, private loggingService: LoggingService, private router: Router) { }

  ngOnInit() {
    this.products = this.service.get();
    this.adminLogged = this.loggingService.getLogStatus();
    this.href = this.router.url;
    this.userView = false;
  }

  // when user clicks in the search field, go to page /Produits
  goToProducts() {
    this.router.navigate(['/produits']);
  }

  // tell the parent which product the user wants to display
  displayProduct() {
    this.productDisplay.emit(this.productName);
  }

  // admin logout
  logOut() {
    this.loggingService.logOut();

    this.router.navigateByUrl('/RefrshComponent', { skipLocationChange: true }).then(() =>
    this.router.navigate(['/produits']));
  }

  // when the admin is on the page "produits", "Comparateur" is displayed in the navbar
  // In that case, when Comparateur is clicked, go to /comparateur

  // when the admin is NOT on the page "produits", display "Vue utilisateur" in the navbar
  // When Vue utilisateur is clicked, go to /produits
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


