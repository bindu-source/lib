import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RegisterCredentials } from '../models/register-credentials';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private regsiterUrl='http://localhost:8880/com/library-management/users/saveUser';

  constructor(private http: HttpClient) {}
  
  register(Credentials: RegisterCredentials ): Observable<object> {
    return this.http.post(`${this.regsiterUrl}`,Credentials);
  }
  

}
