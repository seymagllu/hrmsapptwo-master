import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { Employer } from 'src/app/models/user/employer/employer';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';

@Component({
  selector: 'app-job-advertisement-list-by-company',
  templateUrl: './job-advertisement-list-by-company.component.html',
  styleUrls: ['./job-advertisement-list-by-company.component.css']
})
export class JobAdvertisementListByCompanyComponent implements OnInit {
  
  jobAdvertisements: JobAdvertisement[] = [];
 
  constructor(private jobAdService: JobAdvertisementService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.getByCompanyId(params["id"]));
  }

  getByCompanyId(companyId: number){
    return this.jobAdService.getActiveAdsByEmployer(companyId).subscribe(res => this.jobAdvertisements = res.data);
    
  }


}
