import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AboutSoftwareComponent } from './components/about-software/about-software.component';
import { EmpBookRequestComponent } from './components/emp-book-request/emp-book-request.component';
import { EmpViewAllReserveBookComponent } from './components/emp-view-all-reserve-book/emp-view-all-reserve-book.component';
import { EmpViewIssuedBookComponent } from './components/emp-view-issued-book/emp-view-issued-book.component';
//import { AdmManageBookComponent } from './components/adm-manage-book/adm-manage-book.component';
import { AdIssuedBookComponent } from './components/ad-issued-book/ad-issued-book.component';
import { AdManageFineComponent } from './components/ad-manage-fine/ad-manage-fine.component';
import { AdManageUserComponent } from './components/ad-manage-user/ad-manage-user.component';
import { AdViewAllIssuedBookComponent } from './components/ad-view-all-issued-book/ad-view-all-issued-book.component';
import { AdViewRequestBookDataComponent } from './components/ad-view-request-book-data/ad-view-request-book-data.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { EmpProfileComponent } from './components/emp-profile/emp-profile.component';
import { AdViewAllReserveBookComponent } from './components/ad-view-all-reserve-book/ad-view-all-reserve-book.component';
import { UpdateIssuedBookDetailComponent } from './components/update-issued-book-detail/update-issued-book-detail.component';
import { UpdateDetailsUserComponent } from './components/update-details-user/update-details-user.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AllFeedbackReportComponent } from './components/all-feedback-report/all-feedback-report.component';
import { AllCategoryReportComponent } from './components/all-category-report/all-category-report.component';
import { AddBookComponent } from './components/add-book/add-book.component';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


import { AllBookComponent } from './components/all-book/all-book.component';
import { AdIssueNewBookComponent } from './components/ad-issue-new-book/ad-issue-new-book.component';
import { EmpbookComponent } from './components/empbook/empbook.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch:'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'employee_login',
   component: LoginComponent },

  { path: 'register', 
  component: RegisterComponent },

  { path: 'about', 
  component: AboutComponent },

  { path: 'contact', 
  component: ContactComponent },

  { path: 'categories', 
  component: CategoriesComponent },
  
  { path: 'feedback',
  component: FeedbackComponent,
  },
  { path: 'forgetpassword',
  component: ForgotPasswordComponent,
  },

  //  emp-dashboard
  {
   path: 'emp-dashboard', 
   component: EmployeeDashboardComponent, 
   children: [
    { path: '', redirectTo: 'view_issued_book', pathMatch: 'full' },
    {
      path: 'view_issued_book', 
      component: EmpViewIssuedBookComponent,
    },
    {
        path: 'request_book', 
        component: EmpBookRequestComponent,   
    },
    {
      path: 'reseve_book', 
      component: EmpViewAllReserveBookComponent, 
     },
     {
      path: 'about_software', 
      component:AboutSoftwareComponent,
     },
     {
      path: 'emp_profile', 
      component:EmpProfileComponent
     },
     { path: 'change_password',
     component: ChangePasswordComponent,
     },
       { path: 'all-book',
        component: AllBookComponent,
       },
  ]
  },

 
  

 
    // admin-dashboard
  { 
    path: 'admin',
    component: AdminDashboardComponent,
    children:[

    { path: '', redirectTo: 'all_category', pathMatch: 'full' },
    { path: 'ad_issue_book',
    component:AdIssuedBookComponent ,
    },
    
    { path: 'ad_issued_book',
    component: AdViewAllIssuedBookComponent
   },
   { path: 'ad_reserve_book',
   component: AdViewAllReserveBookComponent
   },

   { path: 'ad_request_book',
   component: AdViewRequestBookDataComponent,
   },
   
   { path: 'manage_fine',
   component: AdManageFineComponent,
   },
   
   { path: 'ad_profile',
   component: AdminProfileComponent,
   },
   
   { path: 'change_password',
   component: ChangePasswordComponent,
   },
  
   { path: 'update_book/:id',
   component: UpdateIssuedBookDetailComponent,
   },
   
   { path: 'update_user',
   component: UpdateDetailsUserComponent,
   },
   
   { path: 'all_feedback',
   component: AllFeedbackReportComponent,
   },
   
   
   { path: 'all_category',
   component: AllCategoryReportComponent,
   },
   
   { path: 'add-book',
   component: AddBookComponent,
   },
   { path: 'issue-new-book',
   component: AdIssueNewBookComponent,
   },
  ]
 },


{ path: 'change_password',
component: ChangePasswordComponent,
},

{ path: 'all-feedback',
component: AllFeedbackReportComponent,
},


{ path: 'emp-all-book',
component: EmpbookComponent,
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
