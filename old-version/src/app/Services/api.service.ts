import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Product } from '../SharedClassesandTypes/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.API_URL}getProducts`);
  }

  getProductByID(selectedPrdID: number): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: ' */*',
      }),
    };
    return this.httpClient.get<Product>(
      `${environment.API_URL}getOneProduct/${selectedPrdID}`
    );
  }

  UpdateProduct(product: Product): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: ' */*',
      }),
    };
    // console.log(product.toString());
    return this.httpClient.post<any>(
      `${environment.API_URL}update`,
      product,
      httpOptions
    );
  }

  InsertProduct(Product: Product): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: ' */*',
      }),
    };
    return this.httpClient.post<any>(
      `${environment.API_URL}insert`,
      Product,
      httpOptions
    );
  }

  DeleteProduct(product_id: number): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.API_URL}delete/${product_id}`
    );
  }
}
