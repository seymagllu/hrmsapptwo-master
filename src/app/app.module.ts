import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseNavbarComponent } from './features/navigation/base-navbar/base-navbar.component';
import { EmployerSidebarComponent } from './features/navigation/employer-sidebar/employer-sidebar.component';
import { CandidateSidebarComponent } from './features/navigation/candidate-sidebar/candidate-sidebar.component';
import { SystemEmployeeSidebarComponent } from './features/navigation/system-employee-sidebar/system-employee-sidebar.component';
import { CandidateSigninComponent } from './features/user/candidate/candidate-signin/candidate-signin.component';
import { CandidateLoginComponent } from './features/user/candidate/candidate-login/candidate-login.component';
import { CandidateProfileComponent } from './features/profile/candidate-profile/candidate-profile.component';
import { SkillAddComponent } from './features/user/candidate/candidate-skill/skill-add/skill-add.component';
import { SkillListComponent } from './features/user/candidate/candidate-skill/skill-list/skill-list.component';
import { JobExperienceAddComponent } from './features/user/candidate/candidate-job-experience/job-experience-add/job-experience-add.component';
import { JobExperienceListComponent } from './features/user/candidate/candidate-job-experience/job-experience-list/job-experience-list.component';
import { LanguageAddComponent } from './features/user/candidate/candidate-language/language-add/language-add.component';
import { LanguageListComponent } from './features/user/candidate/candidate-language/language-list/language-list.component';
import { SchoolAddComponent } from './features/user/candidate/candidate-school/school-add/school-add.component';
import { SchoolListComponent } from './features/user/candidate/candidate-school/school-list/school-list.component';
import { ImageAddComponent } from './features/user/candidate/candidate-image/image-add/image-add.component';
import { AddGithubComponent } from './features/user/candidate/candidate-links/add-github/add-github.component';
import { AddLinkedinComponent } from './features/user/candidate/candidate-links/add-linkedin/add-linkedin.component';
import { EmployerLoginComponent } from './features/user/employer/employer-login/employer-login.component';
import { EmployerSigninComponent } from './features/user/employer/employer-signin/employer-signin.component';
import { EmployerProfileComponent } from './features/profile/employer-profile/employer-profile.component';
import { JobAdvertisementAddComponent } from './features/job-advertisement/job-advertisement-add/job-advertisement-add.component';
import { JobAdvertisementListComponent } from './features/job-advertisement/job-advertisement-list/job-advertisement-list.component';
import { JobAdvertisementListByCompanyComponent } from './features/job-advertisement/job-advertisement-list-by-company/job-advertisement-list-by-company.component';
import { JobAdvertisementVerificationComponent } from './features/job-advertisement/job-advertisement-verification/job-advertisement-verification.component';
import { JobAdvertisementEmployerControlComponent } from './features/job-advertisement/job-advertisement-employer-control/job-advertisement-employer-control.component';
import { CvAddComponent } from './features/user/candidate/candidate-cv/cv-add/cv-add.component';
import { CvInformationComponent } from './features/user/candidate/candidate-cv/cv-information/cv-information.component';
import { CvUpdateComponent } from './features/user/candidate/candidate-cv/cv-update/cv-update.component';
import { PositionAddComponent } from './features/job-advertisement/job-advertisement-position/position-add/position-add.component';
import { PositionListComponent } from './features/job-advertisement/job-advertisement-position/position-list/position-list.component';
import { SystemEmployeeLoginComponent } from './features/user/system-employee/system-employee-login/system-employee-login.component';
import { SystemEmployeeUpdateComponent } from './features/user/system-employee/system-employee-update/system-employee-update.component';
import { SystemEmployeeInformationComponent } from './features/user/system-employee/system-employee-information/system-employee-information.component';
import { HomeComponent } from './features/home-page/home/home.component';
import { EmployerListComponent } from './features/user/employer/employer-list/employer-list.component';

import {TableModule} from 'primeng/table';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import { LinksListComponent } from './features/user/candidate/candidate-links/links-list/links-list.component';
import { ImageListComponent } from './features/user/candidate/candidate-image/image-list/image-list.component';
import { CvBaseComponent } from './features/user/candidate/candidate-cv/cv-base/cv-base.component';
import {ButtonModule} from 'primeng/button';
import { JobAdvertisementFavouriteListComponent } from './features/job-advertisement/job-advertisement-favourite-list/job-advertisement-favourite-list.component';
import { StoreModule } from '@ngrx/store';
import { favouriteReducer } from './store/reducers/favourite-reducer';
import { EmployerUpdateComponent } from './features/user/employer/employer-update/employer-update.component';
import { SystemEmployeeProfileComponent } from './features/profile/system-employee-profile/system-employee-profile.component';
import { SystemEmployeeUpdateControlComponent } from './features/user/system-employee/system-employee-update-control/system-employee-update-control.component';
import { ActivationPipe } from './pipes/activation.pipe';
import { VerificationPipe } from './pipes/verification.pipe';
import { BroadcastPipe } from './pipes/broadcast.pipe';
import { UpdatePipe } from './pipes/update.pipe';
import { UpdateButtonPipe } from './pipes/update-button.pipe';
import { VerifyButtonPipe } from './pipes/verify-button.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterCompanyPipe } from './pipes/filter-company.pipe';
import { FilterAdsByCompanyPipe } from './pipes/filter-ads-by-company.pipe';
import { EmployerAddPositionComponent } from './features/user/employer/employer-add-position/employer-add-position.component';
import { EmployerListPositionComponent } from './features/user/employer/employer-list-position/employer-list-position.component';




@NgModule({
  declarations: [
    AppComponent,
    BaseNavbarComponent,
    EmployerSidebarComponent,
    CandidateSidebarComponent,
    SystemEmployeeSidebarComponent,
    CandidateSigninComponent,
    CandidateLoginComponent,
    CandidateProfileComponent,
    SkillAddComponent,
    SkillListComponent,
    JobExperienceAddComponent,
    JobExperienceListComponent,
    LanguageAddComponent,
    LanguageListComponent,
    SchoolAddComponent,
    SchoolListComponent,
    ImageAddComponent,
    AddGithubComponent,
    AddLinkedinComponent,
    EmployerLoginComponent,
    EmployerSigninComponent,
    EmployerProfileComponent,
    JobAdvertisementAddComponent,
    JobAdvertisementListComponent,
    JobAdvertisementListByCompanyComponent,
    JobAdvertisementVerificationComponent,
    JobAdvertisementEmployerControlComponent,
    CvAddComponent,
    CvInformationComponent,
    CvUpdateComponent,
    PositionAddComponent,
    PositionListComponent,
    SystemEmployeeLoginComponent,
    SystemEmployeeUpdateComponent,
    SystemEmployeeInformationComponent,
    HomeComponent,
    EmployerListComponent,
    LinksListComponent,
    ImageListComponent,
    CvBaseComponent,
    JobAdvertisementFavouriteListComponent,
    EmployerUpdateComponent,
    SystemEmployeeProfileComponent,
    SystemEmployeeUpdateControlComponent,
    ActivationPipe,
    VerificationPipe,
    BroadcastPipe,
    UpdatePipe,
    UpdateButtonPipe,
    VerifyButtonPipe,
    FilterPipe,
    FilterCompanyPipe,
    FilterAdsByCompanyPipe,
    EmployerAddPositionComponent,
    EmployerListPositionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    CardModule,
    StoreModule.forRoot({ favouriteReducer }, {
      runtimeChecks: {
        strictStateImmutability: false
      },
    }),
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: "toast-bottom-right"}),
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
