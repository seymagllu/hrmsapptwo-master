import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/models/city/city';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { Position } from 'src/app/models/position/position';
import { CityService } from 'src/app/services/city/city.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-job-advertisement-add',
  templateUrl: './job-advertisement-add.component.html',
  styleUrls: ['./job-advertisement-add.component.css']
})
export class JobAdvertisementAddComponent implements OnInit {

  positions: Position[] = [];
  cities: City[] = [];
  addJobForm: FormGroup;
  workModels = [
                  {
                    name: "Evden Çalışma",
                    value: "Home Office"
                  },
                  {
                    name: "Geçici Çalışma",
                    value: "Seasonal"
                  },
                  {
                    name: "Ofisten Çalışma",
                    value: "Office"
                  },
                  {
                    name: "Karma Çalışma",
                    value: "Hybrid"
                  },
                  {
                    name: "Stajyerlik",
                    value: "Internship"
                  }
                ];

  workTimes = [
                {
                  name: "Tam Zamanlı",
                  value: "Full Time"
                },
                {
                  name: "Yarı Zamanlı",
                  value: "Part Time"
                }
              ];



  constructor(private positionService: PositionService, 
              private formBuilder: FormBuilder, 
              private cityService: CityService,
              private jobAdService: JobAdvertisementService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllPositions();
    this.getAllCities();
    this.createAddJobForm();
  }

  createAddJobForm(){
    this.addJobForm = this.formBuilder.group({
      positionId: ["", Validators.required],
      jobDescription: ["", Validators.required],
      cityId: ["", Validators.required],
      minSalary : [""],
      maxSalary : [""],
      openPositions: ["", Validators.required],
      deadline: [""],
      workModel : [""],
      workTime: [""],
    });
  }

  getAllPositions(){
    this.positionService.getAllPositions().subscribe(res => this.positions = res.data)
  }

  getAllCities(){
    this.cityService.getAllCities().subscribe(res => this.cities = res.data);
  }

  getEmployerId(){
    return JSON.parse(localStorage.getItem("user")).id;
  }

  getUserId():number{
    return JSON.parse(localStorage.getItem("user")).id;
}

  addJobAdvertisement(){
    let jobAd: JobAdvertisement = this.addJobForm.value;
    jobAd.employerId = this.getEmployerId();
    if(this.addJobForm.valid){
      this.jobAdService.addJobAdvertisement(jobAd).subscribe(res => {
        this.toastrService.warning("Yeni İş İlanı Eklendi ve Onay Bekliyor");
        this.router.navigate(["/employerAdControl/" + this.getUserId()]);
        this.addJobForm.reset('');
      },
      err => this.toastrService.error("hata"));
    }
  }

}
