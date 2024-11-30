import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from 'src/app/services/BookService';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent  implements OnInit ,OnDestroy {

  books: any[] = [];
  private subscription = new Subject<void>();
  constructor( private bookService :BookService){
  }


  ngOnInit(): void {
    this.bookService.getallBooks().pipe(takeUntil(this.subscription)).subscribe(data =>{
      this.books = data;
    })
  }
 
  filteredBooks: any[] = [];
  searchTerm: string = '';

  searchBooks() {
    this.filteredBooks = this.books.filter((book) => {
      return (
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }


  resetSearch(): void {
    this.searchTerm = '';
    this.filteredBooks = [];
  }


  ngOnDestroy(): void {
     this.subscription.next();
     this.subscription.complete();
  }

}