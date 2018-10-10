import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common/common.service';



@Component({
  selector: 'app-comparateur',
  templateUrl: './comparateur.component.html',
  styleUrls: ['./comparateur.component.css']
})
export class ComparateurComponent implements OnInit {

  products: any;

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.products = this.service.get();
  }
}
