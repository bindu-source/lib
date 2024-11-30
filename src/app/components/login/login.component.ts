import { Component } from '@angular/core';
import {FormControl, Validators,  FormBuilder, FormGroup ,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;
  private _snackBar: any;
  constructor(private formBuilder: FormBuilder, private loginservice:LoginService, private snackBar: MatSnackBar ,private router: Router) {

    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  
 login(){
    const { userId, password } = this.loginForm.value;
    const credentials = { userId, password };

    this.loginservice.login(credentials).subscribe({
      next: (response: any) => {
        console.log('response' , response);
         localStorage.setItem('userId',response.id)
        if (response.status) {
          this.snackBar.open('Login successful', '', {
            duration: 500,
            panelClass: 'snackbar-success',
          });
        
          if (response.usertype.toLowerCase() === 'admin') {
            this.router.navigate(['admin']);
          } else if (response.usertype.toLowerCase() === 'employee') {
            this.router.navigate(['emp-dashboard']);
          }
        }
        
      },
      error: (error) => {
        console.log('error' , error);
        this.snackBar.open('Error', '', {
          duration: 2000,
          panelClass: 'snackbar-error', 
        });
      },
    });
  }
}

 

    
 





