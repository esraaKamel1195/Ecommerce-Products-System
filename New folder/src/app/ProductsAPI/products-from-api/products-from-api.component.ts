import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../SharedClassesandTypes/Product';
import { APIService } from '../../Services/api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-from-api',
  templateUrl: './products-from-api.component.html',
  styleUrls: ['./products-from-api.component.css']
})
export class ProductsFromAPIComponent implements OnInit {

  //router: Router;
  productList: Product[] = [];
  TotalPrice:number;
  constructor( private APIService:APIService, private router: Router) {
   }

  ngOnInit() {
    this.TotalPrice=0;
    this.APIService.getAllProducts()
      .subscribe((res)=>{
        console.log(res);
         this.productList=res;
      },
      (err)=>{ 
         console.log(err);
      });
  }
  Buy(product:Product,quantity:number){
   this.TotalPrice+=product.Price*quantity;
   product.Quantity-=quantity;
   console.log(product);
   console.log("from ts buy function"+product.toString());
   if(product.Quantity>0)
   {
   this.APIService.UpdateProduct(product)
     .subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/ProductsFromAPI']);
     },
    (err)=>{
        console.log(err);
    });
    }
    else
    {
      this.DeleteProduct(product._id);
    }
  }
  ViewDetails(product_id:number){
   console.log(product_id);
   this.router.navigate(['/ViewProductDetails', product_id]);
  }


  EditProduct(product_id:number){
    console.log(product_id);
    this.router.navigate(['/EditProduct',product_id]);

  }


  DeleteProduct(product_id:number){
    this.APIService.DeleteProduct(product_id)
    .subscribe((res)=>{
      console.log(res);
      //this.router.navigate(['/ProductsFromAPI']);
      this.ngOnInit();
     },
    (err)=>{
        console.log(err);
    });
  }
}