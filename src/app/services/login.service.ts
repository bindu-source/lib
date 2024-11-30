import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
   

  private apiUrl = 'http://localhost:8880/com/library-management/users/login'

  constructor(private http: HttpClient) {}

  login(credentials: { userId: number; password: string }): Observable<object> {
    return this.http.post(`${this.apiUrl}`, credentials);
  }
  
}
