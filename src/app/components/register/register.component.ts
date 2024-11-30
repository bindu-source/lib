import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterCredentials } from 'src/app/models/register-credentials';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent{
  //Roles: any = ['Admin', 'Employee'];
 
registerForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder , private registerService: RegisterService,
    private snackBar: MatSnackBar ,private router: Router) {
  this.registerForm = this.formBuilder.group({
     userId: ['', Validators.required],
     firstName: ['', Validators.required],
     lastName: ['', Validators.required],
     password: ['', Validators.required],
     userType : ['', Validators.required],
     tnc: [false,Validators.required]
  });
  }

  register(){
    const user: any = this.registerForm.value;
    this.registerService.register(user).subscribe({
      next: (response: any) => {
        console.log('response' , response);
        this.snackBar.open('Register Successfully', '', {
          duration: 800,
          panelClass: 'snackbar-success', 
        });
      },
    });
    this.router.navigate(['login']);
  }
  }



