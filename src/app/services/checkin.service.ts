import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor(private http: HttpClient) { }

  getallchechin(): Observable<any> {
    const url = `http://localhost:8880/com/library-management/api/getAllCheckOut`;
    console.log(url);
    return this.http.get<any>(url);
  }

  deleteCheckinById(id: number): Observable<any> {
    const urlDelete = `http://localhost:8880/com/library-management/api/checkin/${id}`;
    return this.http.delete(urlDelete, { responseType: 'text' });
  }

}
