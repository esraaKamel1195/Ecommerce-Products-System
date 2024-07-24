import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { MainComponent } from './Main/main/main.component';
import { ProductsComponent } from './Main/Products/products/products.component';
import { ChangestyleDirective } from './directives/changestyle.directive';
import { ShoppingComponent } from './Main/main/shopping/shopping.component';
import { DefaultImgURLPipe } from './Pipes/default-img-url.pipe';
import { OrderdetailsComponent } from './Main/Products/products/Order/OrderDetails/orderdetails/orderdetails.component';
import { OrdermasterComponent } from './Main/Products/products/Order/OrderMaster/ordermaster/ordermaster.component';
import { WrongPageComponent } from './WrongPageComponent/wrong-page/wrong-page.component';
import { ContentComponent } from './Content/content/content.component';
import { APIComponent } from './Main/Products/products/api/api.component';
import {HttpClientModule} from '@angular/common/http';
import { ContactUSComponent } from './Main/Products/products/contact-us/contact-us.component';
import { AboutUSComponent } from './Main/Products/products/about-us/about-us.component';
import { ProductsFromAPIComponent } from './ProductsAPI/products-from-api/products-from-api.component';
import { ViewDetailsComponent } from './ProductsAPI/view-details/view-details.component';
import { AddNewProductComponent } from './ProductsAPI/add-new-product/add-new-product.component';
import { EditProductComponent } from './ProductsAPI/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    ChangestyleDirective,
    ShoppingComponent,
    DefaultImgURLPipe,
    OrderdetailsComponent,
    OrdermasterComponent,
    WrongPageComponent,
    ContentComponent,
    APIComponent,
    ContactUSComponent,
    AboutUSComponent,
    ProductsFromAPIComponent,
    ViewDetailsComponent,
    AddNewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
