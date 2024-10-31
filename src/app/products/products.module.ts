import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddAndEditProductComponent } from './add-and-edit-product/add-and-edit-product.component';
import { OneProductInListComponent } from './one-product-in-list/one-product-in-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    AddAndEditProductComponent,
    OneProductInListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: []
})
export class ProductsModule { }
