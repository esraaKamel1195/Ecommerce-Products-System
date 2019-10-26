import { Component, OnInit } from '@angular/core';
import { Product } from '../../Shared Classes and types/Product';
import { APIService } from '../../Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  selectedProduct: Product=new Product();
  constructor(private APIService: APIService,
      private activatedRoute: ActivatedRoute,
      private location: Location
     // public selectedProduct:Product
      ) { 
       // this.selectedProduct=new Product();
      }

  ngOnInit() {
    const selectedPrdID = this.activatedRoute.snapshot.params['id'];
    console.log(selectedPrdID);
    this.APIService.getProductByID(selectedPrdID)
     .subscribe((res)=>{
        this.selectedProduct=res[0]; 
        console.log(this.selectedProduct);  
     },
     (err)=>{
       console.log(err);
     });
  }
  goBack(){
      this.location.back();
  }

}
