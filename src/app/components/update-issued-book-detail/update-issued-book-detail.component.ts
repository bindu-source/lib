import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BookService } from 'src/app/services/BookService';

@Component({
  selector: 'app-update-issued-book-detail',
  templateUrl: './update-issued-book-detail.component.html',
  styleUrls: ['./update-issued-book-detail.component.css']
})
export class UpdateIssuedBookDetailComponent {


  updateBookForm: FormGroup = new FormGroup({});
  books: any[] = [];
  jsonData: string = '';
  private subscription = new Subject<void>();
  private _snackBar: any;
  constructor( private bookService :BookService,private formBuilder:FormBuilder , private router: Router ,private route: ActivatedRoute){
  }
  
  bookId: number = 0;
  ngOnInit(): void {
    this.updateBookForm = this.formBuilder.group({
      bookId: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn :['',Validators.required],
      totalCopies:['',Validators.required],
      genre:['',Validators.required]
    });

    this.route.params.pipe(takeUntil(this.subscription)).subscribe((params) => {
      this.bookId = +params['id'];
      console.log('BookId from URL:', this.bookId);
      this.bookService.getBookById(this.bookId).pipe(takeUntil(this.subscription)).subscribe((book) => {
        this.books = book;
        console.log(book);
        this.updateBookForm.patchValue({   
          bookId:this.bookId,     
          title: book.title,
          author: book.author,
          isbn:book.isbn,
          totalCopies:book.totalCopies,
          genre:book.genre
       });
      });
    });
  }

  updateBook(): void {
    if (this.updateBookForm.valid) {
      const updatedData = this.updateBookForm.value;
      console.log(updatedData);
      this.bookService.updateBooks(this.bookId, updatedData).subscribe({
        next: (response: any) => {
          console.log('Response:', response);
        },
      });
      this.router.navigate(['admin/all_category/']); 
    }
  }

  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
  }


}

