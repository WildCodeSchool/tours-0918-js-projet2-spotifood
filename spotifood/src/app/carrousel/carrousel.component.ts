import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  visible: boolean;
  products: {
    'name': string;
    'id': string;
  } [];

  constructor() {}

  show() {
    this.visible = !this.visible;
  }

  ngOnInit() {
    this.visible = true;
    this.products = [{
      'name': 'Spaghettoni n.7',
      'id': '807/680/815/0072/front_fr.15',
    }, {
      'name': 'Oats',
      'id': '359/762/000/0017/front_fr.16',
    }, {
      'name': 'Ricoré original',
        'id': '761/303/265/5495/front_fr.111',
    }];
  }
}
