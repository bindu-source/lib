import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  
  issueBook():void{
    this.router.navigate(['ad_issue_book'], {relativeTo:this.route});
  }
  
  allIssueBook():void{
    this.router.navigate(['ad_issued_book'], {relativeTo:this.route});
  }
  allReserveBook():void{
    this.router.navigate(['ad_reserve_book'], {relativeTo:this.route});
  }
  
  addBook():void{
    this.router.navigate(['add-book'], {relativeTo:this.route});
  }
  allFeedback():void{
    this.router.navigate(['all_feedback'], {relativeTo:this.route});
  }

  allCategory():void{
    this.router.navigate(['all_category'], {relativeTo:this.route});
  }
  manageFine():void{
    this.router.navigate(['manage_fine'], {relativeTo:this.route});
  }
  updateIssuedBookDetails():void{
    this.router.navigate(['update_book'], {relativeTo:this.route});
  }
   updateUserDetails():void{
    this.router.navigate(['update_user'], {relativeTo:this.route});
  }
  changePassword():void{
    this.router.navigate(['change_password'], {relativeTo:this.route});
  }
  admin_profile():void{
    this.router.navigate(['ad_profile'], {relativeTo:this.route});
  }


  logout()
  {
    if (confirm("Are you want to logout!....")==true) {
      this.router.navigate(['/']);
   } else {
     console.log("It will stay here... ");
     this.router.navigate(['admin']);
   }
}
}
