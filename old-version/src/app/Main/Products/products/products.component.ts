import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/app/SharedClassesandTypes/discount-offers.enum';
import { ICategory } from 'src/app/SharedClassesandTypes/icategory';
import { Iproduct } from 'src/app/SharedClassesandTypes/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  Discount: DiscountOffers;
  Store: string;
  StoreLogo: string;
  // ProductList:Iproduct[]=[];
  // CategoryList:ICategory[]=[];
  ClientName: string;
  IsPurshased: boolean;
  constructor() {
    this.Discount = DiscountOffers.key2;
    this.Store = 'E-Commerce';
    this.StoreLogo = '';
    // this.ProductList=[
    //   {  ID:12,Name:'Shoes',Quantity: 10,Price : 100,Img : 'string'},
    //   {  ID:12,Name:'Clothes',Quantity: 10,Price : 100,Img : 'string'}
    // ];
    // this.CategoryList=[{ ID:12,Name:'Clothes'}, {ID:12,Name:'Shoes'}];
    this.ClientName = 'Esraa';
    this.IsPurshased = true;
  }
  HideAndShowTable() {
    this.IsPurshased = !this.IsPurshased;
  }
  ngOnInit() {}
}
