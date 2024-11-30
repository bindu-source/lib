import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil, windowWhen } from 'rxjs';
import { BookService } from 'src/app/services/BookService';

@Component({
  selector: 'app-all-category-report',
  templateUrl: './all-category-report.component.html',
  styleUrls: ['./all-category-report.component.css']
})
export class AllCategoryReportComponent {

  books: any[] = [];
  private subscription = new Subject<void>();
  constructor( private bookService :BookService , private  router : Router){
  }

  ngOnInit(): void {
    this.bookService.getallBooks().pipe(takeUntil(this.subscription)).subscribe(data =>{
      this.books = data;
    })
  }

 updateBook(id :number) {
  console.log('update-book',id)
   this.router.navigate(['admin/update_book/'+id])
  }

  deleteBook(bookId :number) {
    console.log('delete-book',bookId)
    this.bookService.deleteBookById(bookId).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        alert('deleted');
        location.reload();
      },
    });
    }

  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
 }

}
