import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate/candidate.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-candidate-signin',
  templateUrl: './candidate-signin.component.html',
  styleUrls: ['./candidate-signin.component.css']
})
export class CandidateSigninComponent implements OnInit {
  signInForm: FormGroup;
  validEmail : boolean = false;
  validNationalityId: boolean = false;
  validPassword: boolean = false;


  constructor(private formBuilder: FormBuilder, 
              private candidateService: CandidateService, 
              private userService: UserService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.createSignInForm();
  }

  createSignInForm(){
    this.signInForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalityId: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      birthYear: [0, Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  checkEmail(){
    this.userService.checkByEmail(this.signInForm.get("email").value).subscribe(res => {
      if(res.data === true){
        this.validEmail = false;
        this.toastrService.error("E-Posta Kayıtlı...");
      }else{
        this.validEmail = true;
      }
    })
  }

  checkNationalityId(){
    this.candidateService.checkByNationalityId(this.signInForm.get("nationalityId").value).subscribe(res => {
      if(res.data === true){
        this.validNationalityId = false;
        this.toastrService.error("TC Kimlik No Kayıtlı...");
      }else{
        this.validNationalityId = true;
      }
    })
  }

  checkPassword(password: string, confirmPassword:String){
    if(password === confirmPassword){
      this.validPassword = true;
    }else{
      this.toastrService.error("Şifre tekrarı yanlış...")
      this.validPassword = false;
    }
  }



  signIn(){
    let candidate: Candidate = this.signInForm.value;

    this.checkEmail();
    this.checkNationalityId();
    this.checkPassword(candidate.password, this.signInForm.get("confirmPassword").value);

    if(this.signInForm.valid){
      this.candidateService.addCandidate(candidate).subscribe(res => 
        {
          this.toastrService.success("Eklendi...");
          this.router.navigate([""]);
        }, 
        (err: HttpErrorResponse) => this.toastrService.error(err.error.data.errors["uk"]));
    }
  }
}
