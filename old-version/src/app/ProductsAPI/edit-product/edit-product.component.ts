import { Component, OnInit } from '@angular/core';
import { Product } from '../../SharedClassesandTypes/Product';
import { Router } from '@angular/router';
import { APIService } from '../../Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { async } from 'q';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  selectedPrd: Product;
  EditedPrd: Product;
  selectedPrdID: number;
  constructor(
    private APIService: APIService,
    private router: Router,
    private Location: Location,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.selectedPrd = new Product();
    //this.EditedPrd=new Product();
  }

  ngOnInit() {
    this.selectedPrdID = this.ActivatedRoute.snapshot.params['id'];
    this.APIService.getProductByID(this.selectedPrdID).subscribe(
      (res) => {
        console.log(res);
        this.selectedPrd = res[0];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  UpdateProduct() {
    console.log(this.selectedPrd);

    this.APIService.UpdateProduct(this.selectedPrd[0]).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/ProductsFromAPI']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  goBack() {
    this.Location.back();
  }
}
