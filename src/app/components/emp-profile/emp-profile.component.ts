import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent {
  adminProfileForm: FormGroup = new FormGroup({});
  private subscription = new Subject<void>();
  isUserTypeDisabled: boolean = true;
  constructor(
    private router: Router,
    private userServices: UsersService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar

  ) {}

  ngOnInit(): void {
    this.adminProfileForm = this.formBuilder.group({
      userId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      userType: [{value: '', disabled: true}],
    });

    const id = localStorage.getItem('userId');
    this.userServices
      .getProfileById(Number(id))
      .pipe(takeUntil(this.subscription))
      .subscribe((data) => {
        this.adminProfileForm.setValue(data);
      });
  }

  updateProfile(){
        const updatedData = this.adminProfileForm.value;
        console.log(updatedData);
        this.userServices.updateProfile(this.adminProfileForm.value.userId, updatedData).subscribe({
          next: (response: any) => {
            console.log('Response:', response);   
          },
        });
        this.snackBar.open('Updated Successfully', '', {
          duration: 800,
          panelClass: 'snackbar-success', 
        });
        this.router.navigate(['admin/all_category/']); 
      }
    
  
}
