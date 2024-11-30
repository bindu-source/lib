import { Component } from '@angular/core';

@Component({
  selector: 'app-ad-manage-fine',
  templateUrl: './ad-manage-fine.component.html',
  styleUrls: ['./ad-manage-fine.component.css']
})
export class AdManageFineComponent {
tableData= [
  { book_id:1,book_name:'UPSC', emp_name:'bindu',form:24/11/2001 , to:22/11/2001, delayed_by:'pending',fine:12,actoin:'yes'},
];

}
