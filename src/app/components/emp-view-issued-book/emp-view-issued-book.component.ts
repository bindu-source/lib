import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CheckinService } from 'src/app/services/checkin.service';
@Component({
  selector: 'app-emp-view-issued-book',
  templateUrl: './emp-view-issued-book.component.html',
  styleUrls: ['./emp-view-issued-book.component.css']
  
})
export class EmpViewIssuedBookComponent implements OnInit {
  
  issuedBook: any[] = [];
  private subscription = new Subject<void>();
  constructor(private router:Router , private checkinService:CheckinService){}

  ngOnInit(): void {
    this.checkinService.getallchechin().pipe(takeUntil(this.subscription)).subscribe(data =>{
      this.issuedBook = data;
      console.log(data);
    })
  }

  delete(bookId :number) {
    console.log('delete-book',bookId)
    this.checkinService.deleteCheckinById(bookId).subscribe({
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
