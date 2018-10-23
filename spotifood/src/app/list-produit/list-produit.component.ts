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
  ProductService
} from '../common/product.service';
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
  constructor(private service: NgbModal, private productService: ProductService) {}
  openMedia(content) {
    this.service.open(content);
  }
  ngOnInit() {
        this.products = this.productService.get();
        this.categories = this.productService.getCategories();
        this.categorieTotal = this.productService.tableauCategorie(this.categories);
        this.categorieTotal = this.productService.categorieUnique(this.categorieTotal);
        this.filterDisplayed = false;
    }

  //  <-- for the navbar's search field
  ngOnChanges(changes: SimpleChanges) {
    this.displayProduct();
  }

  displayProduct() {
    this.products = this.productService.dispProduct(this.productName);
  }
  //  -->

  getProductByCategorie(categorie) {
    this.tabTri = this.productService.getProduitByCategorie(categorie);
  }

  getProductByMarque(marque: string) {
    this.tabTri = this.productService.getProductByMarque(marque);
  }

  getProductByAllergene(allergene) {
    this.tabTri = this.productService.getProductByAllergene(allergene);
  }

  getProductByPackaging(packaging) {
    this.tabTri = this.productService.getProductByPackaging(packaging);
  }

  getProductByScore(score) {
    this.tabTri = this.productService.getProductByScore(score);
  }

  changeSelectedCategorie(selectedCategorie: string) {
    this.selectedCategorie = this.productService.changeSelectedCategorie(selectedCategorie);
  }

  changeSelectedMarque(marque: string) {
    this.selectedMarque = this.productService.changeSelectedMarque(marque);

  }
  changeSelectedAllergene(allergene: string) {
    this.selectedAllergene = this.productService.changeSelectedAllergene(allergene);
  }
  changeSelectedPackaging(packaging) {
    this.selectedPackaging = this.productService.changeSelectedPackaging(packaging);
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
