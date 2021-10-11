import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-employee-sidebar',
  templateUrl: './system-employee-sidebar.component.html',
  styleUrls: ['./system-employee-sidebar.component.css']
})
export class SystemEmployeeSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  getUserId():number{
    return JSON.parse(localStorage.getItem("user")).id;
}

}
