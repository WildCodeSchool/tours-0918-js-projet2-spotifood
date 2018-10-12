import { Route } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormAdminEditComponent } from './form-admin-edit/form-admin-edit.component';
import { ProduitAdminComponent } from './produit-admin/produit-admin.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';

const ROUTES: Route[] = [
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'produits',
    component: ProduitsComponent
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
    component: AdministrateurComponent
  },
  {
    path: 'admin/produits',
    component: ProduitAdminComponent
  }
];

export { ROUTES };
