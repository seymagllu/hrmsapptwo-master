import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-base-navbar',
  templateUrl: './base-navbar.component.html',
  styleUrls: ['./base-navbar.component.css']
})
export class BaseNavbarComponent implements OnInit {

  user: any;

  constructor(private router: Router, private toastrService: ToastrService) { }
  
  ngOnInit(): void {
  }

  checkUser():boolean{
    if(localStorage.getItem("user")){
      return true;
    }else{
      return false;
    }
  }

  getUserInfo(){
    this.user = JSON.parse(localStorage.getItem("user"));
    return this.user;
  }

  checkUserType():number{
    if(localStorage.getItem("userType") === "1"){
      return 1;
    }else if(localStorage.getItem("userType") === "2"){
      return 2;
    }else{
      return 3;
    }
  }

  signOut(){
    localStorage.clear();
    this.router.navigate([""]);
    this.toastrService.error("Çıkış Yapıldı")
  }

}
