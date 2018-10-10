import { nutriments } from './nutriments';

export class Product {
  id: string;
  name: string;
  quantity: string;
  brand: string[];
  labels: string[];
  categories: string[];
  packaging: string;
  store: string[];
  ingredients: string[];
  allergens: string[];
  nutriscore: string;
  nutriments: Nutriments;
}
