import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-dev-modif-car',
  templateUrl: './dev-modif-car.component.html',
  styleUrls: ['./dev-modif-car.component.css']
})
export class DevModifCarComponent implements OnInit {

  product: any;

  constructor(private service: ProductService) {
  }

  ngOnInit() {
    this.product = this.service.get();
  }

}
