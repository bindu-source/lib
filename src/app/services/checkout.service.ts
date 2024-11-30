import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {


  constructor(private http: HttpClient) { } 
  checkoutbyid(userId:any,book_id:any,data:any): Observable<any> {
   const apiUrl = `http://localhost:8880/com/library-management/api/checkout/${userId}/${book_id}`; 
    return this.http.post<any>(apiUrl,data);
   }
}
