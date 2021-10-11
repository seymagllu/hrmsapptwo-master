import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private toastrService: ToastrService, 
              private router: Router,
              private employerService: EmployerService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", [Validators.required,Validators.minLength(6),Validators.maxLength(20)]]
    })
  }

  login(){
    this.userService.login(this.loginForm.get("email").value, this.loginForm.get("password").value)
      .subscribe(res => {
        this.employerService.getEmployerById(res.data.id).subscribe(res => {
          this.toastrService.success("giriş yapıldı.")
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("userType", "1");
          let employerId = JSON.parse(localStorage.getItem("user")).id;
          this.router.navigate(["/employerProfile/" + employerId]);
        },
         err => this.toastrService.error("Hatalı Giriş Yaptınız...")
        )}, 
      err => {
        (err: HttpErrorResponse) => this.toastrService.error("Giriş Bilgileri Hatalı...");
      });
  }

}
