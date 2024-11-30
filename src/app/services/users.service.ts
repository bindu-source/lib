import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getProfileById(id :number): Observable<any>{
    const urlGetProfileByID = `http://localhost:8880/com/library-management/users/getUser/${id}`;
    console.log('book id '+ urlGetProfileByID);
    return this.http.get<any>(urlGetProfileByID );
  }

  updateProfile(id: number, data:any): Observable<any>{
    const urlUpdateProfile = `http://localhost:8880/com/library-management/users/updateUser/${id}`;
    console.log(data);
    return this.http.put<any>(urlUpdateProfile,data);
  }




}
