import { Route } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormAdminEditComponent } from './form-admin-edit/form-admin-edit.component';

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
    path: 'add',
    component: FormAdminEditComponent
  },
  {
    path: 'edit/:id',
    component: FormAdminEditComponent
  }
];

export { ROUTES };
