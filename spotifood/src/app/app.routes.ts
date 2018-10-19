import { Route } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormAdminEditComponent } from './form-admin-edit/form-admin-edit.component';
import { ProduitAdminComponent } from './produit-admin/produit-admin.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ComparateurProduitComponent } from './comparateur-produit/comparateur-produit.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';

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
    path: 'admin',
    component: LoginadminComponent
  },
  {
    path: 'admin/produits',
    component: ProduitAdminComponent
  }
];

export { ROUTES };
