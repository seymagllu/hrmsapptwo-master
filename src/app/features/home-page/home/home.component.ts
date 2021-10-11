import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { Employer } from 'src/app/models/user/employer/employer';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobAdvertisements: JobAdvertisement[] = [];
  employers: Employer[] = [];

  totalRecords: number;

  constructor(private jobAdvertisementService: JobAdvertisementService,
              private employerService: EmployerService
             ) { }

  ngOnInit(): void {
    this.getActiveJobAdvertisements();
    this.getAllEmployers();
    
  }

  getActiveJobAdvertisements(){
    this.jobAdvertisementService.getAllActiveAdvertisements().subscribe(res => {
      this.jobAdvertisements = res.data;
      this.totalRecords = this.jobAdvertisements.length;
    });
  }

  getAllEmployers(){
    this.employerService.getAllEmployers().subscribe(res => {
      this.employers = res.data;
    })
  }


}
