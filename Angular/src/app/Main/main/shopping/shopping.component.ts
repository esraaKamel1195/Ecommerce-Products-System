import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  Purchasedate :Date; 
  totalPrice:number;
  constructor() {
    this.Purchasedate=new Date('12/2/1993'); 
    this.totalPrice=100000;
   }

  ngOnInit() {
  }

}
