import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/BookService';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
  
  saveBookForm: FormGroup = new FormGroup({});
  jsonData: string = '';
 
  constructor(private formBuilder:FormBuilder,private   bookService : BookService,
              private snackBar : MatSnackBar) { }
 
  ngOnInit(): void {
    this.saveBookForm =  this.formBuilder.group({
      'title' : new FormControl('',[
        Validators.required
      ]),
      'author' : new FormControl('',[
        Validators.required
      ]),
      'isbn' : new FormControl('',[
        Validators.required
      ]),
      'totalCopies' : new FormControl('',[
        Validators.required
      ]),
      'genre' : new FormControl('',[
        Validators.required
      ]),



    })
  }
 saveBook()
 {
  console.log(this.saveBookForm.value);
  this.jsonData = JSON.stringify(this.saveBookForm.value);
  this.bookService.saveBook(this.saveBookForm.value).subscribe({
    next: (response: any) => {
      console.log('response' , response);
      this.snackBar.open('Book Added Successfully','',{
        duration: 600,
        panelClass: 'snackbar-success', 
      });
    }
  });
  this.resetForm();
 }
    
resetForm(){
  this.saveBookForm.reset();
}



}
