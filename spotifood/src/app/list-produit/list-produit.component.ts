import {
  Component,
  OnInit
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produits} from '../models/product'; // class produit
import { GallerieService} from '../common/gallerie.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
   // liste des produits à afficher
   products: Produits[];
   page = 1;

  // A service to open modal windows.
  // service pour gerer la gallerie des produits
  constructor(private service: NgbModal, private gallerieService: GallerieService) {
  }
 openMedia(content) {
   this.service.open(content);
 }
  ngOnInit() {
        this.products = this.gallerieService.get();
    }

  }
