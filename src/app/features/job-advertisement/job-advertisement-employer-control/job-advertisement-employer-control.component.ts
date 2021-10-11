import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';

@Component({
  selector: 'app-job-advertisement-employer-control',
  templateUrl: './job-advertisement-employer-control.component.html',
  styleUrls: ['./job-advertisement-employer-control.component.css']
})
export class JobAdvertisementEmployerControlComponent implements OnInit {

  jobAdvertisements = [];

  constructor(private jobAdService: JobAdvertisementService, 
              private activatedRoute: ActivatedRoute, 
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.getAllAdsByCompanyId(params["id"]));
  }

  getAllAdsByCompanyId(companyId: number){
    return this.jobAdService.getAllAdsByEmployer(companyId).subscribe(res => this.jobAdvertisements = res.data);
  }

  changeStatus(id: number, status: boolean){
    let indexArray = this.jobAdvertisements.map(ad => ad.id);
    let indexOfAd = indexArray.indexOf(id);
    return this.jobAdService.updateActivationStatus(id, status).subscribe(res => {
      if(status){
        this.toastrService.success("ilan Aktif Hale Getirildi")
      }else{
        this.toastrService.error("İlan Pasif Hale Getirildi")
      }
      
      this.jobAdvertisements[indexOfAd].active = status;
    },
    err => this.toastrService.error("hata"));
    }

  deleteAd(id:number){
    let indexArray = this.jobAdvertisements.map(ad => ad.id);
    let indexOfAd = indexArray.indexOf(id);
    return this.jobAdService.deleteAd(id).subscribe(res => {
      this.toastrService.error("İlan Silindi...");
      this.jobAdvertisements.splice(indexOfAd, 1);
    })
  }


}
