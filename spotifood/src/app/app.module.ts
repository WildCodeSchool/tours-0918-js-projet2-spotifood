import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ModalProduitComponent } from './modal-produit/modal-produit.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ROUTES } from './app.routes';
import { ProduitsComponent } from './produits/produits.component';
import { FormAdminEditComponent } from './form-admin-edit/form-admin-edit.component';
import { ProduitAdminComponent } from './produit-admin/produit-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    ListProduitComponent,
    ModalProduitComponent,
    CarrouselComponent,
    SidenavComponent,
    FooterComponent,
    ProduitsComponent,
    FormAdminEditComponent,
    ProduitAdminComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
   //  ScrollDispatchModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    NgbCollapseModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

