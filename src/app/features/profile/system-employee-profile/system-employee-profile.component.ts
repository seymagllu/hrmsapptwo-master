import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemEmployee } from 'src/app/models/user/system-employee/systemEmployee';
import { SystemEmployeeService } from 'src/app/services/system-employee/system-employee.service';

@Component({
  selector: 'app-system-employee-profile',
  templateUrl: './system-employee-profile.component.html',
  styleUrls: ['./system-employee-profile.component.css']
})
export class SystemEmployeeProfileComponent implements OnInit {

  systemId: number = -1;
  systemEmployee: SystemEmployee = {
    id: -1,
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  constructor(private activatedRoute: ActivatedRoute, 
              private systemEmployeeService: SystemEmployeeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.systemId = params["id"]);
    this.systemEmployeeService.getById(this.systemId).subscribe(res => this.systemEmployee = res.data);
  }

  updateInformation(updatedSystemEmployee: SystemEmployee){
    this.systemEmployee = updatedSystemEmployee;
  }

}
