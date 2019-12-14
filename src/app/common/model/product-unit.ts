export class ProductUnit {
  unitId: string = undefined;
  stockId: string = undefined;
  unit: string = undefined;
  stock: number = undefined;
  smallerUnit: ProductUnit = undefined;
  largerUnit: ProductUnit = undefined;
  conversion: number = undefined; // conversion from larger unit
}
