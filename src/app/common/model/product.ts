import { ProductUnit } from './product-unit';

export class Product {
  id: string = undefined;
  name: string = undefined;
  description: string = undefined;
  units: ProductUnit[] = [];
}
