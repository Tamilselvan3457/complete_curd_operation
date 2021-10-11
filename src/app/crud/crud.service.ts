import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(product:any): Observable<Product> {
    console.log(product)
    return this.httpClient.post<Product>(this.apiServer + '/posts/', JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id:any): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any, product:any): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/posts/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id :any){
    // console.log(id);
    // console.log('deleted')
    // const tamil =this.apiServer + '/posts/' + id
    //   console.log(tamil);
    //    return this.httpClient.delete(tamil)
    return this.httpClient.delete<Product>(this.apiServer + '/posts/' + id, this.httpOptions)
     .pipe(
       catchError(this.errorHandler)
     )
  }
  errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}