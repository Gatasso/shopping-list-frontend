import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.urlAPI + "/products");
  }

  public addNewProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(environment.urlAPI + "/products", product);
  } 
}
