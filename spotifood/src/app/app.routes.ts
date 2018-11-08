import { Route } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormAdminEditComponent } from './form-admin-edit/form-admin-edit.component';
import { ProduitAdminComponent } from './produit-admin/produit-admin.component';
import { ComparateurProduitComponent } from './comparateur-produit/comparateur-produit.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { MessagerieAdminComponent } from './messagerie-admin/messagerie-admin.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChangeCarrouselComponent } from './change-carrousel/change-carrousel.component';
import { PageContribuerComponent } from './page-contribuer/page-contribuer.component';

const ROUTES: Route[] = [
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'produits',
    component: ProduitsComponent
  },
  {
    path: 'comparateur',
    component: ComparateurProduitComponent
  },
  { path: '',
    redirectTo: '/accueil',
    pathMatch: 'full' },
  {
    path: 'admin/add',
    component: FormAdminEditComponent
  },
  {
    path: 'admin/edit/:id',
    component: FormAdminEditComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin',
    component: LoginadminComponent
  },
  {
    path: 'admin/produits',
    component: ProduitAdminComponent
  },
  {
    path: 'admin/messagerie',
    component: MessagerieAdminComponent
  },
  {
    path: 'admin/change-carrousel',
    component: ChangeCarrouselComponent
  },
  {
    path: 'contribuer',
    component: PageContribuerComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
   },
];

export { ROUTES };
