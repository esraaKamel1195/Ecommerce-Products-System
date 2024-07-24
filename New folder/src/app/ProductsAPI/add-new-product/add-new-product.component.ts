import { Component, OnInit } from '@angular/core';
import { Product } from '../../SharedClassesandTypes/Product';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { APIService } from '../../Services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  newProduct: Product;
  constructor( private APIService: APIService
    , private router: Router,private Location: Location ) {
      this.newProduct=new Product();
     }
  
     InsertProduct() {
      console.log(JSON.stringify(this.newProduct));
  
     this.APIService.InsertProduct(this.newProduct)
      .subscribe(
        (data) => {console.log (JSON.stringify(data));
                   this.router.navigate(['/ProductsFromAPI']);
                   },
        (err) => {console.log(err);
        });
  
      //this.router.navigate(['/ProductsFromAPI']);
    }

  ngOnInit() {
  }
  goBack(){
    this.Location.back();
}
}
