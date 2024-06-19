import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL: string = 'https://restcountries.com/v3.1/all'
  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<any>{
    return this.httpClient.get (this.API_URL).pipe(res => res)
  }
}
