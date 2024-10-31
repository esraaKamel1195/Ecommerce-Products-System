import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/SharedClassesandTypes/icategory';

@Component({
  selector: 'app-ordermaster',
  templateUrl: './ordermaster.component.html',
  styleUrls: ['./ordermaster.component.css'],
})
export class OrdermasterComponent implements OnInit {
  CategoryList: ICategory[] = [];
  SelectedItem: number;
  totalPriceFromProductDetails: number;
  constructor() {
    this.CategoryList = [
      { ID: 1, Name: 'Mobiles' },
      { ID: 2, Name: 'Laptops' },
      { ID: 3, Name: 'Tablets' },
    ];
  }
  onTotalPriceChange(newPrice: number): void {
    this.totalPriceFromProductDetails = newPrice;
  }
  ngOnInit() {}
}
