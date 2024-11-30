import { Component } from '@angular/core';

@Component({
  selector: 'app-ad-view-all-reserve-book',
  templateUrl: './ad-view-all-reserve-book.component.html',
  styleUrls: ['./ad-view-all-reserve-book.component.css']
})
export class AdViewAllReserveBookComponent {
  tableData = [
    {book_id:21 , book_name:'Technical' , user_name:'Sonu',  form:12/12/23,to:19/12/24 ,issue_status:'pending',fine_collected:10, action:'yes'},
    {book_id:55, book_name:'Educational' , user_name:'Bindu', form:13/12/23,to:9/12/24 ,issue_status:'confirm',fine_collected:4, action:'yes'},
    {book_id:78 , book_name:'Non Technical' , user_name:'Abhinav', form:15/12/23,to:4/12/24 ,issue_status:'pending',fine_collected:11, action:'yes'},
    {book_id:45 , book_name:'Religious' , user_name:'Deepak', form:17/12/23,to:6/12/24 ,issue_status:'pending',fine_collected:20, action:'yes'},
    {book_id:40, book_name:'History' , user_name:'Daniel', form:19/12/23,to:10/12/24 ,issue_status:'confirm',fine_collected:12, action:'yes'}, 
   ];
}
