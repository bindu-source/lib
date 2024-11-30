import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AboutComponent } from './components/about/about.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './components/image-slider/image-slider.component'; // Import NgbModule
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { EmpViewIssuedBookComponent } from './components/emp-view-issued-book/emp-view-issued-book.component';
import { EmpViewAllReserveBookComponent } from './components/emp-view-all-reserve-book/emp-view-all-reserve-book.component';
import { EmpBookRequestComponent } from './components/emp-book-request/emp-book-request.component';
import { AboutSoftwareComponent } from './components/about-software/about-software.component';
import { EmpProfileComponent } from './components/emp-profile/emp-profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
//import { AdmManageBookComponent } from './components/adm-manage-book/adm-manage-book.component';
import { AdManageFineComponent } from './components/ad-manage-fine/ad-manage-fine.component';
//import { AdManageOnlinePaidIssueComponent } from './components/ad-manage-online-paid-issue/ad-manage-online-paid-issue.component';
import { AdIssuedBookComponent } from './components/ad-issued-book/ad-issued-book.component';
import { AdViewAllIssuedBookComponent } from './components/ad-view-all-issued-book/ad-view-all-issued-book.component';
import { AdViewAllReserveBookComponent } from './components/ad-view-all-reserve-book/ad-view-all-reserve-book.component';
import { AdManageUserComponent } from './components/ad-manage-user/ad-manage-user.component';
import { AdViewRequestBookDataComponent } from './components/ad-view-request-book-data/ad-view-request-book-data.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllFeedbackReportComponent } from './components/all-feedback-report/all-feedback-report.component';
import { UpdateDetailsUserComponent } from './components/update-details-user/update-details-user.component';
import { UpdateIssuedBookDetailComponent } from './components/update-issued-book-detail/update-issued-book-detail.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { LoginService } from './services/login.service';
import { AllCategoryReportComponent } from './components/all-category-report/all-category-report.component';
import { AllBookComponent } from './components/all-book/all-book.component';
import { BookService } from './services/BookService';
import { AdIssueNewBookComponent } from './components/ad-issue-new-book/ad-issue-new-book.component';
import { EmpbookComponent } from './components/empbook/empbook.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CategoriesComponent,
    FeedbackComponent,
    ContactComponent,
    ImageSliderComponent,
    FooterComponent,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    EmpViewAllReserveBookComponent,
    EmpBookRequestComponent,
    AboutSoftwareComponent,
    EmpProfileComponent,
    AdminProfileComponent,
    AdManageFineComponent,
    AdIssuedBookComponent,
    AdViewAllIssuedBookComponent,
    AdViewAllReserveBookComponent,
    AdManageUserComponent,
    AdViewRequestBookDataComponent,
    EmpViewIssuedBookComponent,
    AllFeedbackReportComponent,
    UpdateDetailsUserComponent,
    UpdateIssuedBookDetailComponent,
    AddBookComponent,
    AllCategoryReportComponent,
    AllBookComponent,
    AdIssueNewBookComponent,
    EmpbookComponent,
 
  
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule, 
    NgbModule,
    MatIconModule,
    FlexLayoutModule ,
   ReactiveFormsModule ,
   FormsModule,
   MatCardModule,
   MatInputModule,
   BrowserAnimationsModule,
   MatMenuModule,
   MatSnackBarModule,
   MatSidenavModule,
   MatListModule,
   MatExpansionModule, 

  ],
  providers: [LoginService,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
