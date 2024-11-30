import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-ad-issue-new-book',
  templateUrl: './ad-issue-new-book.component.html',
  styleUrls: ['./ad-issue-new-book.component.css']
})
export class AdIssueNewBookComponent {

 
  newBookForm : FormGroup = new FormGroup({});
  jsonData: string = '';
 
  constructor(private formBuilder:FormBuilder,private checkoutService :CheckoutService,
              private snackBar : MatSnackBar) { }
 
  ngOnInit(): void {
    this.newBookForm=  this.formBuilder.group({
      'userId' : new FormControl('',[
        Validators.required
      ]),
      'bookId' : new FormControl('',[
        Validators.required
      ]),
      'borrowingDate' : new FormControl('',[
        Validators.required
      ]),
      'dueDate' : new FormControl('',[
        Validators.required
      ]),
    })
  }



newBook()
 {
  console.log(this.newBookForm.value);
  this.jsonData = JSON.stringify(this.newBookForm.value.userId);
  this.checkoutService.checkoutbyid(this.newBookForm.value.userId,this.newBookForm.value.bookId,null).subscribe({
    next: (response: any) => {
      console.log('response' , response);
      this.snackBar.open('success','',{
        duration: 600,
        panelClass: 'snackbar-success', 
      });
    }
  });
  this.resetForm();
 }




resetForm() {
 this.newBookForm.reset();
}

}
