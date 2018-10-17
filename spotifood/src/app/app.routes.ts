import { Route } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormAdminEditComponent } from './form-admin-edit/form-admin-edit.component';
import { ProduitAdminComponent } from './produit-admin/produit-admin.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ComparateurProduitComponent } from './comparateur-produit/comparateur-produit.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { ContactComponent } from './contact/contact.component';

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
    path: 'add',
    component: FormAdminEditComponent
  },
  {
    path: 'edit/:id',
    component: FormAdminEditComponent
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
    path: 'contact',
    component: ContactComponent
  }
];

export { ROUTES };
