import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookUser } from '../models/book-user';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public apiUrl = 'http://localhost:8880/com/library-management/books/savebook'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  searchBooks(searchTerm: string): Observable<BookUser[]> {
    return this.http.get<BookUser[]>(`${this.apiUrl}?search=${searchTerm}`);
  }

  saveBook(bookData: any): Observable<any> {
   // return this.http.post(`${this.apiUrl}`, bookData);
     return this.http.post(this.apiUrl, bookData,{ responseType: 'text' });
  }

  getallBooks(): Observable<any> {
    const url = `http://localhost:8880/com/library-management/books/getAllbooks`;
    return this.http.get<any>(url);
  }

  getBookById(id :number): Observable<any>{
    const urlGetBookByID = `http://localhost:8880/com/library-management/books/getBook/${id}`;
    return this.http.get<any>(urlGetBookByID );
    console.log('book id '+ id);
  }

  updateBooks(id: number, data:any): Observable<any>{
    const urlUpdateBook = `http://localhost:8880/com/library-management/books/updateBook/${id}`;
    console.log(data);
    return this.http.put<any>(urlUpdateBook,data);
  }

  // deleteBookById(id: number): Observable<any>{
  //   const urlDeleteBookById = `http://localhost:8880/com/library-management/books/delBook/${id}`;
  //   return this.http.delete<any>(urlDeleteBookById);
  // }

  deleteBookById(id: number): Observable<any> {
    const urlDelete = `http://localhost:8880/com/library-management/books/delBook/${id}`;
    return this.http.delete(urlDelete, { responseType: 'text' });
  }


}
