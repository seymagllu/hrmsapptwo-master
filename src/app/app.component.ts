import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn:boolean = true;

  

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

  checkUser():boolean{
    if(localStorage.getItem("user")){
      return true;
    }else{
      return false;
    }
  }
}
