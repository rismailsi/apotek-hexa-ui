import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Product } from 'src/app/common/model/product';
import * as moment from 'moment';
import { ProductStock } from 'src/app/common/model/product-stock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductListComponent implements OnInit {

  filterForm: FormGroup;
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'brand', 'stockDescription'];
  expandedElement: Product | null;

  constructor(
    private fb: FormBuilder,
    ) {
      this.filterForm = this.fb.group({
        productName: [''],
      });
    }

  ngOnInit() {
  }

}

const ELEMENT_DATA: Product[] = [
  {
    name: 'Parasetamol 500mg',
    brand: 'Kimia Farma',
    description: 'Acetaminophen atau paracetamol adalah obat untuk penurun demam dan pereda nyeri, seperti nyeri haid dan sakit gigi.',
    stockDescription: '',
    units: [{
      unit: 'Kardus',
      stock: {
        barcode: '000000',
        expiryDate: moment(),
        stock: 1,
      }
    },
    {
      unit: 'Box',
      conversion: 20,
      stock: {
        barcode: '000001',
        expiryDate: moment(),
        stock: 1,
      }
    },
    {
      unit: 'Strip',
      conversion: 10,
      stock: {
        barcode: '000002',
        expiryDate: moment(),
        stock: 10,
      }
    }
  ]
  }
];
