import { ProductStock } from './product-stock';

export class ProductUnit {
  unitId?: string = undefined;
  stockId?: string = undefined;
  unit: string = undefined;
  stock: ProductStock = undefined;
  // smallerUnit: ProductUnit = undefined;
  // largerUnit: ProductUnit = undefined;
  conversion?: number = undefined; // conversion from larger unit
}
