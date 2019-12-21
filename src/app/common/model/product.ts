import { ProductUnit } from './product-unit';

type Mode = 'add' | 'edit' | 'view';

export class Product {
  id?: string = undefined;
  name: string = undefined;
  brand: string = undefined;
  description: string = undefined;
  units: ProductUnit[] = [];
  mode?: Mode = 'view';

  static placeholder? = {
    name: 'Name',
    brand: 'Brand',
    description: 'Description',
    stockDescription: 'Stock',
    action: '',
  }

  constructor(mode: Mode, name?: string, desc?: string) {
    this.mode = mode;
    this.name = name
  }

  get stockDescription(): string {
    const stocks: string[] = [];
    this.units.forEach(u => {
      stocks.push(u.stock + ' ' + u.unit);
    });
    return stocks.join(', ');
  }

  set stockDescription(val: string) { }
}
