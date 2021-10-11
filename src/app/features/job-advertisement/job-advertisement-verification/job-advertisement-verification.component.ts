import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { CandidateService } from 'src/app/services/candidate/candidate/candidate.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';

@Component({
  selector: 'app-job-advertisement-verification',
  templateUrl: './job-advertisement-verification.component.html',
  styleUrls: ['./job-advertisement-verification.component.css']
})
export class JobAdvertisementVerificationComponent implements OnInit {

  jobAdvertisements: JobAdvertisement[] = [];
  filterText: string = "";

  constructor(private jobAdvertisementService: JobAdvertisementService,
              private toastrService: ToastrService
              ) { }

  ngOnInit(): void {
    this.getActiveJobAdvertisements();
  }

  getActiveJobAdvertisements(){
    this.jobAdvertisementService.getAllAdvertisements().subscribe(res => {
      this.jobAdvertisements = res.data;
    });
  }

  verify(id:number, status: boolean){
    let indexArray = this.jobAdvertisements.map(ad => ad.id);
    let indexOfAd = indexArray.indexOf(id);
    this.jobAdvertisementService.updateVerificationStatus(id, status).subscribe(res => {
      if(status){
        this.toastrService.success("İlan Onaylandı...");
      }else{
        this.toastrService.error("İlan Onayı Kaldırıldı...");
      }
      
      this.jobAdvertisements[indexOfAd].verified = status;
    },
      err => console.log(err));
  }

}
