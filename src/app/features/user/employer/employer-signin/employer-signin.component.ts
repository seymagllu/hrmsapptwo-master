import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/user/employer/employer';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-employer-signin',
  templateUrl: './employer-signin.component.html',
  styleUrls: ['./employer-signin.component.css']
})
export class EmployerSigninComponent implements OnInit {
  
  signInForm: FormGroup;
  validEmail: boolean = false;
  validPassword:boolean = false;
  validEmailDomain: boolean = false;

  errorMsg = '';
  
  constructor(private formBuilder: FormBuilder, 
              private toastrService: ToastrService, 
              private employerService: EmployerService, 
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.createSignInForm();
  }

  createSignInForm(){
    this.signInForm = this.formBuilder.group({
      companyName: ["", Validators.required],
      website: ["", Validators.required],
      phoneNumber: ["", [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      password: ["", [Validators.required,Validators.minLength(6),Validators.maxLength(20),]],
      confirmPassword: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }
  checkByEmail(){
    this.userService.checkByEmail(this.signInForm.get("email").value).subscribe(res => {
      if(res.data === true){
        this.validEmail = false;
        this.toastrService.error("E-Posta Adresi Kayıtlı...");
      }else{
        this.validEmail = true;
      }
    });
  }

  checkPassword(password: string, confirmPassword:String){
    if(password === confirmPassword){
      this.validPassword = true;
    }else{
      this.validPassword = false;
    }
  }

  checkEmailDomain(email:string, website:string){
    let websiteDomain = website.substr(4);
    let indexOfAt = email.indexOf('@');
    let emailDomain = email.substr(indexOfAt+1);
    if(websiteDomain === emailDomain){
      this.validEmailDomain = true;
    }else{
      this.validEmailDomain = false;
    }
  }

  signIn() {

    
    this.checkByEmail();
    this.checkPassword(this.signInForm.get("password").value,this.signInForm.get("confirmPassword").value );
    this.checkEmailDomain(this.signInForm.get("email").value, this.signInForm.get("website").value);

    if(this.signInForm.valid){
      let employer: Employer = this.signInForm.value;
      employer.updateVerified = false;
      this.employerService.addEmployer(employer)
        .subscribe(
          res => {
            this.toastrService.success("Kaydedildi: " + employer.companyName)
            this.router.navigate([""]);
          },
          err => console.log(err)
        )
    }
  }

}
