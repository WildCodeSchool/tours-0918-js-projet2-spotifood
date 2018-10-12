import { Nutriments } from './nutriment';
export class Produits {
  id: string | number;
  name: string;
  quantity: string;
  brands: string;
  labels: string;
  categories: string;
  packaging: string;
  store: string;
  ingredients: string;
  allergens: string;
  nutriscore: string;
  nutriments: Nutriments;
}
