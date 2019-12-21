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
  label = Product.placeholder;

  constructor(
    private fb: FormBuilder,
    ) {
      this.filterForm = this.fb.group({
        productName: [''],
      });
    }

  ngOnInit() {
  }

  add() {
    this.dataSource.unshift(new Product('add', 'Obat Terlarang'));
    this.dataSource = [...this.dataSource];
    console.log(this.dataSource);
  }

  onRowClick(product: Product) {
    if (product.mode==='add' || product.mode==='edit') {
      return
    }
    this.expandedElement = this.expandedElement === product ? null : product; 
  }
}

const ELEMENT_DATA: Product[] = [
  {
    id: '0000000000',
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
  },
  {
    id: '0000000000',
    name: 'Ibuprofen 400mg',
    brand: 'Pharos',
    description: 'Ibuprofen adalah obat yang digunakan untuk meredakan nyeri dan peradangan, misalnya sakit gigi, nyeri haid, dan radang sendi.',
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
