import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-view-all-reserve-book',
  templateUrl: './emp-view-all-reserve-book.component.html',
  styleUrls: ['./emp-view-all-reserve-book.component.css']
})
export class EmpViewAllReserveBookComponent {
  tableData = [
    {book_id:55 , book_name:'History' ,  user_name:'Shaloo',date_re:1/1/24,status:'pending'},
    {book_id:56,  book_name:'Religious' , user_name:'Deepak',date_re:1/2/24,status:'confirm'},
    {book_id:57 , book_name:'Technical' , user_name:'Abhinav',date_re:1/3/24,status:'pending',},
    {book_id:58 , book_name:'Non Technical' , user_name:'Sonu', date_re:1/3/24,status:'confirm',},
    {book_id:59 , book_name:'Fiction' , user_name:'Pooja',date_re:1/4/24,status:'pending',},
  ];
}
