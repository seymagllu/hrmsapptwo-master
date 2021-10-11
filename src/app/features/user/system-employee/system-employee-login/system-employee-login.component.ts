import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SystemEmployeeService } from 'src/app/services/system-employee/system-employee.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-system-employee-login',
  templateUrl: './system-employee-login.component.html',
  styleUrls: ['./system-employee-login.component.css']
})
export class SystemEmployeeLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private toastrService: ToastrService,
              private router: Router,
              private systemEmployeeService: SystemEmployeeService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.get("email").value, this.loginForm.get("password").value)
          .subscribe(res => {
            this.systemEmployeeService.getById(res.data.id).subscribe(res => {
              this.toastrService.success("giriş yapıldı.")
              localStorage.setItem("user", JSON.stringify(res.data));
              localStorage.setItem("userType", "3");
              let systemEmployeeId = JSON.parse(localStorage.getItem("user")).id
              this.router.navigate(["/systemProfile/" + systemEmployeeId]);
            },
            err => this.toastrService.error("Hatalı Giriş Yaptınız...")
            )},
          (err: HttpErrorResponse) => this.toastrService.error("Giriş Bilgileri Hatalı..."));
      }
  }

}
