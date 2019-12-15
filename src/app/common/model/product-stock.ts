import * as moment from 'moment';

export class ProductStock {
  barcode: string = undefined;
  expiryDate: moment.Moment = undefined;
  stock: number = undefined;
}
