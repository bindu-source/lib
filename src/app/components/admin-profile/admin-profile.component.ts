import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
})
export class AdminProfileComponent implements OnInit {
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
      userType: [{value: '', disabled: false}, Validators.required],
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
   
      if (this.adminProfileForm.valid) {
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
  
}
