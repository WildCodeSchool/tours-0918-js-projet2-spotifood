import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ModalProduitComponent } from './modal-produit/modal-produit.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ROUTES } from './app.routes';
import { ProduitsComponent } from './produits/produits.component';
import { FormAdminEditComponent } from './form-admin-edit/form-admin-edit.component';
import { ProduitAdminComponent } from './produit-admin/produit-admin.component';
import { ComparateurProduitComponent } from './comparateur-produit/comparateur-produit.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AutofocusDirective } from './autofocus.directive';
import { MessagerieAdminComponent } from './messagerie-admin/messagerie-admin.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    ListProduitComponent,
    ModalProduitComponent,
    CarrouselComponent,
    FooterComponent,
    ProduitsComponent,
    FormAdminEditComponent,
    ProduitAdminComponent,
    ComparateurProduitComponent,
    ComparateurComponent,
    LoginadminComponent,
    AutofocusDirective,
    MessagerieAdminComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    NgbCollapseModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

