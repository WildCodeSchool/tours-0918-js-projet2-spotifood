import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private service: GallerieService, private loggingService: LoggingService, private router: Router) { }

  ngOnInit() {
    this.products = this.service.get();
    this.adminLogged = this.loggingService.getLogStatus();
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


