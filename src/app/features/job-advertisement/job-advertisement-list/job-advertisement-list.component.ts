import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate/candidate.service';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';

import * as FavouriteActions from '../../../store/actions/favourite-actions';

@Component({
  selector: 'app-job-advertisement-list',
  templateUrl: './job-advertisement-list.component.html',
  styleUrls: ['./job-advertisement-list.component.css']
})
export class JobAdvertisementListComponent implements OnInit {

  jobAdvertisements: JobAdvertisement[] = [];
  candidateFavourites: JobAdvertisement [] = [];
  candidate: Candidate;
  filterText: string = "";

  constructor(private jobAdvertisementService: JobAdvertisementService,
              private candidateService: CandidateService,
              private toastrService: ToastrService,
              ) { }

  ngOnInit(): void {
    this.getActiveJobAdvertisements();
    if(this.checkUserType() === 2){
      this.getCandidateById();
      this.candidateService.getCandidateById(this.getUserId()).subscribe(res => {
        this.candidateFavourites = res.data.favoriteJobAdvertisements;
      })
    }
  }

  checkUser():boolean{
    if(localStorage.getItem("user")){
      return true;
    }else{
      return false;
    }
  }


  getCandidateById(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe(res => {
      this.candidate = res.data;
    })
  }

  getActiveJobAdvertisements(){
    this.jobAdvertisementService.getAllActiveAdvertisements().subscribe(res => {
      this.jobAdvertisements = res.data;
    });
  }

  checkUserType(){
    if(localStorage.getItem("userType") === "1"){
      return 1;
    }else if(localStorage.getItem("userType") === "2"){
      return 2;
    }else if(localStorage.getItem("userTpe") === "3"){
      return 3;
    }else{
      return undefined;
    }
  }

  getUserId(){
    return JSON.parse(localStorage.getItem("user")).id;
  }

  addToFavourites(ad: JobAdvertisement){
    let candId = this.getUserId();
    this.candidateService.addToFavourites(candId, ad.id).subscribe(res => {
      console.log(res);
      this.candidate.favoriteJobAdvertisements.push(ad);
      this.toastrService.success("Favorilere Eklendi...");
    },
    err => this.toastrService.error("Favorilerde mevcut..."));
  }

  removeFromFavourites(advId:number){
    let indexArray = this.candidate.favoriteJobAdvertisements.map(ad => ad.id);
    let indexOfAd = indexArray.indexOf(advId);
    this.candidateService.removeFromFavourites(this.getUserId(), advId).subscribe(res => {
      console.log(res.data.id)
      this.candidate.favoriteJobAdvertisements.splice(indexOfAd, 1);
    })
  }

  checkFavourite(id:number){
    let indexArray = this.candidate.favoriteJobAdvertisements.map(ad => ad.id)
    let indexOfAd = indexArray.indexOf(id);
    if(indexOfAd !== -1){
      return true;
    }else{
      return false;
    }
  }






}
