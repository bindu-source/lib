import { Component } from '@angular/core';

@Component({
  selector: 'app-ad-issued-book',
  templateUrl: './ad-issued-book.component.html',
  styleUrls: ['./ad-issued-book.component.css']
})
export class AdIssuedBookComponent {
tableData= [
  {book_id:55 , book_name:'Fiction' , emp_name:'Bindu', form:12/12/23,to:10/12/23 , action:'yes'},
  {book_id:56,  book_name:'Technical' , emp_name:'Sonu', form:13/12/23,to:11/12/23 , action:'yes'},
  {book_id:57 , book_name:'Non Technical' , emp_name:'Pooja', form:14/12/23,to:12/12/23 , action:'yes'},
  {book_id:58 , book_name:'Religious' , emp_name:'Deepak', form:15/12/23,to:13/12/23 , action:'yes'},
  {book_id:59 , book_name:'Education' , emp_name:'Abhinav', form:16/12/23,to:14/12/23 , action:'yes'},
  {book_id:60 , book_name:'Non-Fiction' , emp_name:'Rahul', form:17/12/23,to:15/12/23 , action:'yes'},
]
}
