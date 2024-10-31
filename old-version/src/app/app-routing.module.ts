import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Main/Products/products/products.component';
import { OrdermasterComponent } from './Main/Products/products/Order/OrderMaster/ordermaster/ordermaster.component';
import { OrderdetailsComponent } from './Main/Products/products/Order/OrderDetails/orderdetails/orderdetails.component';
import { WrongPageComponent } from './WrongPageComponent/wrong-page/wrong-page.component';
import { MainComponent } from './Main/main/main.component';
//import { APIComponent } from './Main/Products/products/api/api.component';
import { ContactUSComponent } from './Main/Products/products/contact-us/contact-us.component';
import { AboutUSComponent } from './Main/Products/products/about-us/about-us.component';
import { ProductsFromAPIComponent } from './ProductsAPI/products-from-api/products-from-api.component';
import { ViewDetailsComponent } from './ProductsAPI/view-details/view-details.component';
import { AddNewProductComponent } from './ProductsAPI/add-new-product/add-new-product.component';
import { EditProductComponent } from './ProductsAPI/edit-product/edit-product.component';

const routes: Routes = [
  { path: 'home', component: ProductsComponent },
  // {path:'Products',component:APIComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'Products/:id', component: OrderdetailsComponent },
  { path: 'Products', component: OrdermasterComponent },
  { path: 'Contact', component: ContactUSComponent },
  { path: 'About', component: AboutUSComponent },
  { path: 'ProductsFromAPI', component: ProductsFromAPIComponent },
  { path: 'ViewProductDetails/:id', component: ViewDetailsComponent },
  { path: 'AddNewProduct', component: AddNewProductComponent },
  { path: 'EditProduct/:id', component: EditProductComponent },
  { path: '**', component: WrongPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
