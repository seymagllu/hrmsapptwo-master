import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/user/employer/employer';
import { EmployerService } from 'src/app/services/employer/employer.service';

@Component({
  selector: 'app-employer-update',
  templateUrl: './employer-update.component.html',
  styleUrls: ['./employer-update.component.css']
})
export class EmployerUpdateComponent implements OnInit {
  
  companyNameUpdateForm: FormGroup;
  emailWebsiteUpdateForm: FormGroup;
  phoneNumberUpdateForm: FormGroup;
  @Input() employer: Employer;
  @Output() updateEmployerEvent = new EventEmitter<boolean>();


  constructor(private formBuilder: FormBuilder,
              private employerService: EmployerService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createForms();
  }

  createCompanyNameUpdateForm(){  
    this.companyNameUpdateForm = this.formBuilder.group({
      companyName: ["", Validators.required]
    });
  }

  createEmailWebsiteUpdateForm(){
    this.emailWebsiteUpdateForm = this.formBuilder.group({
      email: ["",[Validators.required, Validators.email]],
      website: ["", Validators.required]
    });
  }

  createPhoneNumberUpdateForm(){
    this.phoneNumberUpdateForm = this.formBuilder.group({
      phoneNumber: ["", Validators.required]
    });
  }

  createForms(){
    this.createCompanyNameUpdateForm();
    this.createEmailWebsiteUpdateForm();
    this.createPhoneNumberUpdateForm();
  }

  updateCompanyName(empId:number){
    if(this.companyNameUpdateForm.valid){
      this.employerService.updateCompanyName(this.companyNameUpdateForm.get("companyName").value, empId)
        .subscribe(res => {
            this.updateEmployerEvent.emit(false);
            this.toastrService.warning("Güncellemeler için Sistem Personeli Onayı Bekleniyor");
            this.companyNameUpdateForm.reset('');
          },
            err => this.toastrService.error("Bir Hata Oluştu"));
    }
  }

  updateEmailWebsite(empId:number){
    if(this.emailWebsiteUpdateForm.valid){
      this.employerService.updateEmailAndWebsite(this.emailWebsiteUpdateForm.get("email").value, this.emailWebsiteUpdateForm.get("website").value, empId)
        .subscribe(res => {
          this.updateEmployerEvent.emit(false);
          this.toastrService.warning("Güncellemeler için Sistem Personeli Onayı Bekleniyor");
          this.emailWebsiteUpdateForm.reset('')
          },
          err => this.toastrService.error("Bir Hata Oluştu"));
    }
  }

  updatePhoneNumber(empId: number){
    if(this.phoneNumberUpdateForm.valid){
      this.employerService.updatePhoneNumber(this.phoneNumberUpdateForm.get("phoneNumber").value, empId)
        .subscribe(res => {
          this.updateEmployerEvent.emit(false);
          this.toastrService.warning("Güncellemeler için Sistem Personeli Onayı Bekleniyor");
          this.emailWebsiteUpdateForm.reset('');
        },
        err => this.toastrService.error("Bir Hata Oluştu"));
    }
  }
}
