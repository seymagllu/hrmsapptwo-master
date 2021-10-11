import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-sidebar',
  templateUrl: './employer-sidebar.component.html',
  styleUrls: ['./employer-sidebar.component.css']
})
export class EmployerSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUserId():number{
    return JSON.parse(localStorage.getItem("user")).id;
}

}
