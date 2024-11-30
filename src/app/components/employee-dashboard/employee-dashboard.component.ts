import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

issuedBook():void{
  this.router.navigate(['view_issued_book'], {relativeTo:this.route});
}

reserveBook():void{
  this.router.navigate(['reseve_book'], {relativeTo:this.route});
}


requestBook():void{
  this.router.navigate(['request_book'], {relativeTo:this.route});
}

aboutSoftware():void{
  this.router.navigate(['about_software'], {relativeTo:this.route});
}

changePassword():void{
  this.router.navigate(['change_password'], {relativeTo:this.route});
}

profile():void{
  this.router.navigate(['emp_profile'], {relativeTo:this.route});
}

allbook():void{
  this.router.navigate(['all-book'], {relativeTo:this.route});
}

logout() {
  if (confirm("Are you want to logout!....")==true) {
    this.router.navigate(['/']);
  } else {
    console.log("It will stay here... ");
    this.router.navigate(['emp-dashboard']);
  }
  }

}

