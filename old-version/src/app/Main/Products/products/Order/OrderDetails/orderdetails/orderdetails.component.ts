import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { Product } from 'src/app/SharedClassesandTypes/Product';
import { Event } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css'],
})
export class OrderdetailsComponent implements OnInit, OnChanges {
  router: any;
  ProductList: Product[] = [];
  ProductListOfCat: Product[];
  totalPrice: number;
  @Input() selectedItemfromMaster: number;
  @Output() TotalPriceChanged: EventEmitter<number>;
  constructor() {
    this.TotalPriceChanged = new EventEmitter<number>();
    this.selectedItemfromMaster = 1;
    this.ProductList = [
      new Product(
        1,
        'mobile1',
        1000,
        100,
        1,
        'photo-1521939094609-93aba1af40d7.jpg'
      ),
      new Product(
        2,
        'mobile2',
        1000,
        100,
        1,
        'photo-1521939094609-93aba1af40d7.jpg'
      ),
      new Product(
        3,
        'mobile3',
        1000,
        100,
        1,
        'photo-1521939094609-93aba1af40d7.jpg'
      ),
      new Product(4, 'laptop1', 1000, 100, 2, 'chuwi-herobook-header.jpg'),
      new Product(5, 'laptop2', 1000, 100, 2, 'chuwi-herobook-header.jpg'),
      new Product(6, 'laptop3', 1000, 100, 2, 'chuwi-herobook-header.jpg'),
      new Product(
        7,
        'tablet1',
        1000,
        100,
        3,
        'tablets-top-2x1-lowres1024-9464.jpg'
      ),
      new Product(
        8,
        'tablet2',
        1000,
        100,
        3,
        'tablets-top-2x1-lowres1024-9464.jpg'
      ),
      new Product(
        9,
        'tablet3',
        1000,
        100,
        3,
        'tablets-top-2x1-lowres1024-9464.jpg'
      ),
    ];
    this.totalPrice = 0;
  }

  DisplayDataTable(catID: number): Product[] {
    console.log('In function, CatID: ' + catID);
    let ProductListOfCat: Product[] = [];
    this.ProductList.filter((prod) => {
      if (prod.catID == catID) {
        ProductListOfCat.push(prod);
      }
    });
    return ProductListOfCat;
  }
  DispalyTotalPrice(Price: number, itemQuantity: number) {
    this.totalPrice += Price * itemQuantity;
    this.TotalPriceChanged.emit(this.totalPrice);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change');
    this.ProductListOfCat = this.DisplayDataTable(this.selectedItemfromMaster);
  }

  ngOnInit() {
    console.log('oninit');
    this.ProductListOfCat = this.DisplayDataTable(this.selectedItemfromMaster);
  }
  ViewDetails(prdID: number) {
    this.router.navigate(['/Product', prdID]);
  }
}
