import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerLoginGuard implements CanActivate {

  constructor(private toastrService: ToastrService, private router: Router) {}

  checkUser():boolean{
    if(localStorage.getItem("user")){
      return true;
    }else{
      return false;
    }
  }

  checkUserType(){
    if(localStorage.getItem("userType") === "1"){
      return 1;
    }else if(localStorage.getItem("userType") === "2"){
      return 2;
    }else if(localStorage.getItem("userType") === "3"){
      return 3;
    }else{
      return undefined;
    }
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.checkUser()){
        if(this.checkUserType() !== 1){
          this.toastrService.error("Giriş yapmalısınız...");
          this.router.navigate(["employerLogin"]);
          return false;
        }else{
          return true
        }
    }else{
      this.toastrService.error("Giriş yapmalısınız...");
      this.router.navigate(["employerLogin"]);
      return false;
    }
  }
  
}
