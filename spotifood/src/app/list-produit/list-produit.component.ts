import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import {
  Product
} from '../models/product'; // class produit
import {
  GallerieService
} from '../common/gallerie.service';
import products from '../common/products';
import * as _ from 'lodash';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit, OnChanges {
   // liste des produits à afficher
   products: Product[];
   page = 1;
   tabTri: Product[];
   categories: string[];
   categorie: string;
   categorieTotal: string[];
   selectedCategorie = 'Catégories';
   selectedMarque = 'Marques';
   selectedAllergene = 'Allergenes';
   selectedPackaging = 'Conditionnement';
    marques = _.uniq(_.flatten(_.map(products, 'brand')));
    allergenes = _.uniq(_.flatten(_.map(products, 'allergenes')));
    packaging = _.uniq(_.flatten(_.map(products, 'packaging')));
    filterDisplayed: boolean;

  //  <-- product name provided by the navbar
  @Input()
  productName: string;
  // -->

  // A service to open modal windows.
  // service pour gerer la gallerie des produits
  constructor(private service: NgbModal, private gallerieService: GallerieService) {}
  openMedia(content) {
    this.service.open(content);
  }
  ngOnInit() {
        this.products = this.gallerieService.get();
        this.categories = this.gallerieService.getCategories();
        this.categorieTotal = this.gallerieService.tableauCategorie(this.categories);
        this.categorieTotal = this.gallerieService.categorieUnique(this.categorieTotal);
        this.filterDisplayed = false;
    }

  //  <-- for the navbar's search field
  ngOnChanges(changes: SimpleChanges) {
    this.displayProduct();
  }

  displayProduct() {
    this.products = this.gallerieService.dispProduct(this.productName);
  }
  //  -->

  getProductByCategorie(categorie) {
    this.tabTri = this.gallerieService.getProduitByCategorie(categorie);
  }

  getProductByMarque(marque: string) {
    this.tabTri = this.gallerieService.getProductByMarque(marque);
  }

  getProductByAllergene(allergene) {
    this.tabTri = this.gallerieService.getProductByAllergene(allergene);
  }

  getProductByPackaging(packaging) {
    this.tabTri = this.gallerieService.getProductByPackaging(packaging);
  }

  getProductByScore(score) {
    this.tabTri = this.gallerieService.getProductByScore(score);
  }

  changeSelectedCategorie(selectedCategorie: string) {
    this.selectedCategorie = this.gallerieService.changeSelectedCategorie(selectedCategorie);
  }

  changeSelectedMarque(marque: string) {
    this.selectedMarque = this.gallerieService.changeSelectedMarque(marque);

  }
  changeSelectedAllergene(allergene: string) {
    this.selectedAllergene = this.gallerieService.changeSelectedAllergene(allergene);
  }
  changeSelectedPackaging(packaging) {
    this.selectedPackaging = this.gallerieService.changeSelectedPackaging(packaging);
  }

  reinitialiser() {
    this.selectedCategorie = 'Catégories';
    this.selectedMarque = 'Marques';
    this.selectedAllergene = 'Allergenes';
    this.selectedPackaging = 'Conditionnement';
  }

  showFilter() {
    this.filterDisplayed = !this.filterDisplayed;
  }
}
