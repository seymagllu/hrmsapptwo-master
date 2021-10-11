import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employer } from 'src/app/models/user/employer/employer';
import { EmployerService } from 'src/app/services/employer/employer.service';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {

  employerId: number;
  employer:Employer;

  constructor(private activatedRoute: ActivatedRoute,
              private employerService: EmployerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.employerId = params["id"]);
    this.employerService.getEmployerById(this.employerId).subscribe(res => this.employer = res.data);
  }

  updateVerification(status: boolean){
    this.employer.updateVerified = status;
  }



}
