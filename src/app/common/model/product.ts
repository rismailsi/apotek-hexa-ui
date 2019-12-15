import { ProductUnit } from './product-unit';

export class Product {
  id?: string = undefined;
  name: string = undefined;
  brand: string = undefined;
  description: string = undefined;
  units: ProductUnit[] = [];


  get stockDescription(): string {
    const stocks: string[] = [];
    this.units.forEach(u => {
      stocks.push(u.stock + ' ' + u.unit);
    });
    return stocks.join(', ');
  }

  set stockDescription(val: string) { }
}
