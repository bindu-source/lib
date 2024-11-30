import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-ad-view-all-issued-book',
  templateUrl: './ad-view-all-issued-book.component.html',
  styleUrls: ['./ad-view-all-issued-book.component.css']
})
export class AdViewAllIssuedBookComponent implements OnInit {

  issuedBook: any[] = [];
  private subscription = new Subject<void>();
  constructor(private router:Router , private checkinService:CheckinService){}

  ngOnInit(): void {
    this.checkinService.getallchechin().pipe(takeUntil(this.subscription)).subscribe(data =>{
      this.issuedBook=data;
      console.log(this.issuedBook=data);
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

   issueNewBook(){
   this.router.navigate(['admin/issue-new-book']);
   }


   ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
 }


}
