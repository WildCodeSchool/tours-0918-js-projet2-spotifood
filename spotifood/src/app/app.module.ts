import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ModalProduitComponent } from './modal-produit/modal-produit.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponent,
    ModalProduitComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
