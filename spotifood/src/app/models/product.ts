import { Nutrients } from './nutriments';

export class Product {
  id: string | number;
  name: string;
  quantity: string;
  brands: string;
  labels: string[];
  categories: string[];
  packaging: string[];
  ingredients: string;
  allergens: string[];
  nutriscore: string;
  nutrients: Nutrients;
  images: string;
  isSelected: boolean;
}
